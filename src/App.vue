<script setup lang="ts">
import { useUserStore } from './stores/user'
// 引入 ant design 全域樣式
import 'ant-design-vue/dist/antd.less'

// 保持登入功能
const user = localStorage.getItem('user')
const userStore = useUserStore()
if (user) userStore.userInfo = user
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
@import '@/style/global.scss';
</style>
