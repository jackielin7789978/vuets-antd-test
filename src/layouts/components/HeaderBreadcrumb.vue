<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import useCurrentMenuNode from '@/composables/useCurrentMenuNode'
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'

const menu = useMenuStore()
const route = useRoute()
const currentMenuNode = useCurrentMenuNode(route.path)
const breadcrumbList = ref([])

watch(route, () => {
	if (route.path === '/login') return
	const currentMenuNode = useCurrentMenuNode(route.path)
	if (currentMenuNode) {
		breadcrumbList.value = currentMenuNode.breadcrumbs
	}
})
</script>

<template>
	<Breadcrumb :class="breadcrumbList ? '' : 'opacity-0'">
		<BreadcrumbItem v-for="breadcrumb in breadcrumbList" :key="breadcrumb">
			<router-link v-if="breadcrumb.redirect" :to="breadcrumb.redirectPath">{{
				breadcrumb.name
			}}</router-link>
			<span v-else>{{ breadcrumb.name }}</span>
		</BreadcrumbItem>
	</Breadcrumb>
</template>
