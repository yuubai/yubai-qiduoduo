<script setup>
import {message} from 'ant-design-vue'
import {ref} from 'vue'
import { login } from'../api'
import router from "../router/index"
// 获取路由参数
import { useRoute } from 'vue-router'
const route = useRoute()
const debounce = (fn,delay) =>{

}
const username = ref('')
const password = ref('')
const Login = () => {
	let user = {
		username:username.value,
		password:password.value,
	}
	console.log('user',user)
	login(user).then((res) => {
		let data = res.data
		console.log('登录成功了吗？')
		console.log(res)
		if (res.data.code === 200){
			message.success('登录成功！')
			router.push('/about')
		}else message.warn(res.data.msg)
	})
}

</script>

<template>
	<div style="width:500px;display:flex">
		<a-form>
			<a-form-item label="用户名:">
				<a-input v-model:value="username"/>
			</a-form-item>
			<a-form-item label="密  码:">
				<a-input-password v-model:value="password"/>
			</a-form-item>
			<a-button @click="Login" type="primary" style="width:100%;margin: 0 auto">登录 </a-button>
		</a-form>
	</div>
	
</template>
