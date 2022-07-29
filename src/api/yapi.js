import axios from 'axios'

const yapi = axios.create({
	baseURL: 'http://172.16.88.230:40001/mock/34/demo',
})

export default yapi

// export const greetUser = () => {
// 	let result
// 	yapi
// 		.get('/greet')
// 		.then((res) => {
// 			if (res.status !== 200) throw 'something went wrong'
// 			return res.data
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// 		.then((data) => (result = data))
// 	return result
// }

// export const getDashboardData = () => {
// 	let result
// 	yapi
// 		.get('/dashboard')
// 		.then((res) => {
// 			if (res.status !== 200) throw 'something went wrong'
// 			return res.data
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// 		.then((data) => (result = data))
// 	return result
// }
