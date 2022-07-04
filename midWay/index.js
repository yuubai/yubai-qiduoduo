const express = require('express');
const path = require('path')
const fs = require('fs')
const app = express();

const mysql = require('mysql');

// 创建数据库链接
const connection = mysql.createConnection({
    host:        '127.0.0.1',
    //port:         3306,                 //可选,默认为3306
    //charset:     'utf8_general_ci',     //可选
    user:        'root',
    password:    'root',
    database:    'qiduoduo'
});

//  对数据库进行连接
connection.connect();

let users = [];

//跨域问题
app.use((request , response , next ) => {
    response.header( 'Access-Control-Allow-Origin' , '*') // 跨域最重要的一步 设置响应头
    response.header( 'Access-Control-Allow-Headers' , '*') // 跨域最重要的一步 设置响应头
    next(); // 执行next函数执行后续代码
})


let token = 'login_fail'
let loginBody = {code: 200, result:'',message: '', data: {token}}

app.post('/api/user/login',(req,res)=>{

    req.on('data', data => {
        console.log('data : ',data)
        let {username,password} = JSON.parse(data)
        try{
            connection.query(`SELECT * FROM user where username = ? and password = ?`,[username,password],(error,results,fields)=>{
                // if(error) throw error;
                if(error) {
                    res.json(loginBody);
                }
                if (results.length === 0){
                    loginBody.code = 401
                    loginBody.message = '账号或密码不正确！'
                    loginBody.result = 'error'
                    res.json(loginBody);
                }else{
                    console.log('result:  ',results)
                    let user = JSON.stringify(results[0])
                    user = JSON.parse(user)
                    console.log(user)
                    console.log(password,'===',user.password)
                    if (user.password === password){   //true
                        console.log('查询成功')
                        loginBody.message = '登录成功!'
                        loginBody.result = 'success'
                        loginBody.data.token = 'login_success'
                        loginBody.data.id = user.id
                        res.json(loginBody);
                    }
                }

                // res.end(JSON.stringify(loginBody));
            });

        }catch (e) {
            console.log(e)
        }

    })
    // req.on('end',(data)=>{
    //     // token = 'login_success'
    //     console.log('on',data)
    //     res.json(loginBody);
    // })
})
app.get('api/user/findAllUsers',(req,resp)=>{
    // sql查询操作
    connection.query(`SELECT * FROM user;`,(error,results,fields)=>{
        if(error) throw error;
        users = results;
        resp.end(JSON.stringify(users));
        //  关闭连接 ?关闭连接后无法再执行业务逻辑
        // connection.end();
    });

})
app.post('api/user/addUser',(req,resp)=>{
    req.on('data',data=>{
        console.log(data);
        let user =data.toString()
        user = JSON.parse(user)

        console.log(user);

        connection.query('insert into user set ?',user,(error,results)=>{
            if(error) throw error;

            console.log('添加成功')
        })

    })
    req.on('end',()=>{
        resp.json({code: 200, message: '添加成功！', data: null});
    })
})

app.listen(8081,()=>{
    console.log('APP run at:http://localhost:8081');
})
