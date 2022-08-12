import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
// build 時取消 antdv 全域註冊，改用這個 resolver
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			// resolvers: [
			// 	AntDesignVueResolver({
			// 		importStyle: 'less',
			// 	}),
			// ],
			dirs: ['src/components', 'src/layouts'],
		}),
		Pages(),
		Layouts(),
		WindiCSS({
			preflight: false,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					'primary-color': '#0FC4CA',
					'link-color': '#0FC4CA',
					'success-color': '#00CDAD',
					'warning-color': '#FF8737',
					'error-color': '#FF5B52',
					'heading-color': '#000',
					'text-color': '#222',
					'text-color-secondary': '#464646',
					'disabled-color': '#909090',
					'border-radius-base': '4px',
					'layout-header-background': '#141414',
					'menu-dark-inline-submenu-bg': '#2F2F2F',
					'font-size-base': '15px',
				},
				javascriptEnabled: true,
			},
			scss: {
				additionalData: `@import "@/style/globalVars.scss";`,
			},
		},
	},
	// optimizeDeps: {
	// 	include: [''],
	// },
})
