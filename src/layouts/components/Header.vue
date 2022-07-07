<script setup>
import { BellOutlined, SearchOutlined } from '@ant-design/icons-vue'
</script>

<template>
	<a-layout-header class="header">
		<HeaderBreadcrumb />
		<a-space size="middle">
			<SearchOutlined class="nav-controls" />
			<BellOutlined class="nav-controls" />
			<HeaderUserMenu />
		</a-space>
	</a-layout-header>
</template>

<style lang="scss" scoped>
.header {
	@apply bg-white flex items-center justify-between pr-4 pl-14 shadow shadow-light-900;
}
.nav-controls {
	@apply text-lg relative top-2px cursor-pointer hover:text-black;
}
</style>
