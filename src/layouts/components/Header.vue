<script setup lang="ts">
import {
	BellOutlined,
	SearchOutlined,
	FullscreenOutlined,
	FullscreenExitOutlined,
} from '@ant-design/icons-vue'
import { LayoutHeader } from 'ant-design-vue'

defineProps({
	isFullscreen: {
		type: Boolean,
	},
})
</script>

<template>
	<LayoutHeader class="header">
		<HeaderBreadcrumb />
		<a-space size="middle">
			<SearchOutlined class="nav-controls" />
			<BellOutlined class="nav-controls" />
			<FullscreenOutlined
				v-if="!isFullscreen"
				class="nav-controls"
				@click="$emit('toggle-fullscreen')"
			/>
			<FullscreenExitOutlined
				v-else
				class="nav-controls"
				@click="$emit('toggle-fullscreen')"
			/>

			<HeaderUserMenu />
		</a-space>
	</LayoutHeader>
</template>

<style lang="scss" scoped>
.header {
	@apply bg-white flex items-center justify-between pr-4 pl-14 shadow shadow-light-900;
}
.nav-controls {
	@apply text-lg relative top-2px cursor-pointer hover:text-black;
}
</style>
