import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			userInfo: '',
		}
	},
	getters: {
		isLoggedIn(state) {
			if (state.userInfo) return true
			return false
		},
	},
})
