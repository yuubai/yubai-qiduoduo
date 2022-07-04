import axios from 'axios'
export async function login(user) {
	return axios({
		method: 'post',
		url: 'http://localhost:8081/api/user/login',
		data: user
	})
}
// export async function login(user) {
// 	console.log('login.....')
// 	var xhr = new XMLHttpRequest()
// 	xhr.open('post', 'http://localhost:8081/login')
// 	console.log(user)
// 	xhr.send(JSON.stringify(user))
// 	xhr.onreadystatechange = () => {
// 		console.log('aaa')
// 		if (xhr.status === 200 && xhr.readyState === 4) {
// 			console.log(xhr.responseText)
// 			return xhr.responseText
// 		}
// 	}
// }
