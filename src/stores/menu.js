import { defineStore } from 'pinia'
// import yapi from '@/api/yapi'
import * as menu from './menu.json'

// get routes from mock API
// let routes
// yapi
// 	.post('/routes', {
// 		role: 'superadmin',
// 	})
// 	.then((res) => {
// 		if (res.status === 200) {
// 			return res.data
// 		}
// 	})
// 	.then((data) => (routes = data))
export const useMenuStore = defineStore('menu', {
	state: () => {
		return {
			menuTree: menu.default,
		}
	},
})
