<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { Menu } from 'ant-design-vue'

const menu = useMenuStore()
const route = useRoute()

const selectedKeys = ref([route.path])

watch(route, () => {
	selectedKeys.value = [route.path]
})
</script>

<template>
	<Menu v-model:selectedKeys="selectedKeys">
		<template v-for="item in menu.menuTree" :key="item.name">
			<SiderSubMenuItem :item="item" />
		</template>
	</Menu>
</template>
