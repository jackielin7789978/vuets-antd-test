<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import useCurrentMenuNode from '@/composables/useCurrentMenuNode'

const menu = useMenuStore()
const route = useRoute()
const currentMenuNode = useCurrentMenuNode(route.path)
const selectedKeys = ref([route.path])
const openKeys = ref([`sub-${currentMenuNode.id[0]}`])

watch(route, () => {
	const currentMenuNode = useCurrentMenuNode(route.path)
	openKeys.value = [`sub-${currentMenuNode.id[0]}`]
})
</script>

<template>
	<a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys">
		<template v-for="item in menu.menuTree" :key="item.path">
			<SiderSubMenuItem :item="item" />
		</template>
	</a-menu>
</template>
