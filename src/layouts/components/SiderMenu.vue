<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
const route = useRoute()

const selectedKeys = ref([route.path])

watch(route, () => {
	selectedKeys.value = [route.path]
})
</script>

<template>
	<a-menu v-model:selectedKeys="selectedKeys">
		<template v-for="item in menu.menuTree" :key="item.name">
			<SiderSubMenuItem :item="item" />
		</template>
	</a-menu>
</template>
