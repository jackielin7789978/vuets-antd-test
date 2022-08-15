import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'virtual:windi.css'
import 'ant-design-vue/dist/antd.less'
// 全域註冊部分元件，其餘元件仍須手動引入(勿更動)
import { Space, Row, Col, Card } from 'ant-design-vue'
const GloballyRegisteredAntdComponents = [Space, Row, Col, Card]

// File Base Routing + Layout system
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useUserStore } from './stores/user'
const routes = setupLayouts(generatedRoutes)

// 預設首頁路徑為 '/dashboard'，將造訪 '/' 的使用者重新導向至 '/dashboard'
const homeRedirect = { path: '/', redirect: '/dashboard' }
routes.push(homeRedirect)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

// Vue Router 導航守衛判斷頁面是否需要登入才能造訪
router.beforeEach((to, from, next) => {
	const { requiresLogin } = to.meta
	const { isLoggedIn } = useUserStore()

	if (requiresLogin && !isLoggedIn) return next({ name: 'login' })
	next()
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
GloballyRegisteredAntdComponents.forEach((component) => app.use(component))
app.mount('#app')
