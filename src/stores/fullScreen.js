import { defineStore } from 'pinia'

export const useFullScreenStore = defineStore('fullScreen', {
	state: () => {
		return {
			isFullScreen: false,
		}
	},
})
