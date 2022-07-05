const jwt = require('jsonwebtoken')
const secret = 'qiduoduo'

const  createToken = (user)=>{
	let startTime = Math.floor(Date.now() / 1000);
	let token = jwt.sign(user, secret)

	return token
}

module.exports={
	createToken,
}
