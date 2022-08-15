<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { Layout } from 'ant-design-vue'
const LayoutContent = Layout.Content

const fullEl = ref(null)
const { isFullscreen, toggle } = useFullscreen(fullEl)
</script>

<template>
	<Layout
		id="default-layout"
		:style="{ minHeight: '100%', height: '100%', overflow: 'hidden' }"
		ref="fullEl"
	>
		<Sider />
		<Layout>
			<Header @toggle-fullscreen="toggle" :isFullscreen="isFullscreen" />
			<LayoutContent
				class="relative p-4 md:px-6 md:py-4 lg:px-8 lg:py-6 overflow-y-scroll"
			>
				<router-view></router-view>
				<footer class="text-center mt-12">
					© COPYRIGHT ALL RIGHTS RESERVED
				</footer>
			</LayoutContent>
		</Layout>
	</Layout>
</template>
