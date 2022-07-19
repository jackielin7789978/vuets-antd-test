<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import useCurrentMenuNode from '@/composables/useCurrentMenuNode'

const menu = useMenuStore()
const route = useRoute()
const currentMenuNode = useCurrentMenuNode(route.path)

const selectedKeys = ref([route.path])
const openKeys = ref([])
getOpenKeys()

watch(route, () => {
	getOpenKeys()
	selectedKeys.value = [route.path]
})

function getOpenKeys() {
	for (let i = 1; i < currentMenuNode.id.length; i++) {
		openKeys.value.push('sub-' + currentMenuNode.id.substr(0, i))
	}
}
</script>

<template>
	<a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys">
		<template v-for="item in menu.menuTree" :key="item.path">
			<SiderSubMenuItem :item="item" />
		</template>
	</a-menu>
</template>
