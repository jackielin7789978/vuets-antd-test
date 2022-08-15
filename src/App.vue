<script setup lang="ts">
import { useUserStore } from './stores/user'
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
