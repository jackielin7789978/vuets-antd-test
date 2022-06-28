import { createRouter, createWebHistory } from 'vue-router'
import Hi from '@/views/Hi.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'hi',
			component: Hi,
		},
	],
})

export default router
