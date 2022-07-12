<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
// import useCurrentMenuNode from '@/composables/useCurrentMenuNode'

const menu = useMenuStore()
const route = useRoute()
// const currentMenuNode = useCurrentMenuNode(route.path)
const selectedKeys = ref([route.path])
</script>

<template>
	<a-menu v-model:selectedKeys="selectedKeys">
		<template v-for="item in menu.menuTree" :key="item.path">
			<SiderSubMenuItem :item="item" />
		</template>
	</a-menu>
</template>
