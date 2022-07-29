import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
	state: () => {
		return {
			isShown: false,
			type: 'success',
		}
	},
	getters: {
		message(state) {
			switch (state.type) {
				case 'success':
					return '新功能上線！這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。'
				case 'info':
					return '提示使用者中性資訊。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。'
				case 'warning':
					return '警示訊息。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。'
				case 'error':
					return '錯誤訊息。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。這是一段沒有意義的假文，請不要浪費時間讀完。'
			}
		},
	},
})
