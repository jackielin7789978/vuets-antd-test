import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// File Base Routing + Layout system
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

import Antd from 'ant-design-vue' // dev 使用全域註冊增加開發速度，build 時移除
import 'ant-design-vue/dist/antd.css' // build 時移除
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
