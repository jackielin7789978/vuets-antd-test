<script setup>
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const fullEl = ref(null)
const { isFullscreen, enter, exit, toggle } = useFullscreen(fullEl)
</script>

<template>
	<a-layout
		id="default-layout"
		:style="{ minHeight: '100%', height: '100%', overflow: 'hidden' }"
		ref="fullEl"
	>
		<Sider />
		<a-layout>
			<BasicAlert />
			<Header @toggle-fullscreen="toggle" :isFullscreen="isFullscreen" />
			<a-layout-content
				class="p-4 md:px-6 md:py-4 lg:px-8 lg:py-6 overflow-y-scroll"
			>
				<router-view></router-view>
				<a-layout-footer class="text-center"
					>© COPYRIGHT ALL RIGHTS PRESERVED</a-layout-footer
				>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
