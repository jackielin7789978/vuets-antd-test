import axios from 'axios'

const yapi = axios.create({
	baseURL: 'http://172.16.88.230:40001/mock/34/demo',
})

export default yapi
