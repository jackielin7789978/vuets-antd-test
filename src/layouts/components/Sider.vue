<script setup>
import { ref } from 'vue'
import { LayoutSider } from 'ant-design-vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
const siderCollapsed = ref(false)
const toggleSider = () => (siderCollapsed.value = !siderCollapsed.value)
</script>

<template>
	<LayoutSider
		breakpoint="lg"
		v-model:collapsed="siderCollapsed"
		:trigger="null"
		collapsible
		width="240"
		class="relative bg-[#141414] h-full"
	>
		<button class="collapseBtn" @click="toggleSider">
			<MenuUnfoldOutlined v-show="siderCollapsed" />
			<MenuFoldOutlined v-show="!siderCollapsed" />
		</button>

		<!-- logo -->
		<div id="logo">
			<span></span>
		</div>

		<!-- menu -->
		<SiderMenu mode="inline" theme="dark" class="customSiderMenu" />
	</LayoutSider>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
	width: 6px;
	height: 8px;
}
::-webkit-scrollbar-track {
	background-color: rgb(0 0 0 / 20%);
}
::-webkit-scrollbar-thumb {
	background-color: rgba(178, 180, 185, 0.5);
	border-radius: 8px;
	box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
	transition: all 0.2s ease;

	&:hover {
		background-color: rgba(178, 180, 185, 0.678);
	}
}

#logo {
	height: 4rem;
	width: 100%;
	display: flex;
	span {
		display: inline-block;
		width: 90%;
		margin: auto;
		height: 2.5rem;
		background-color: #77777766;
	}
}
.customSiderMenu {
	max-height: calc(100vh - 64px);
	overflow-y: auto;
}

.collapseBtn {
	@apply absolute left-full top-4 rounded-none hover:bg-light-600 w-8 h-8 flex items-center justify-center;
}
</style>
