<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import useCurrentMenuNode from '@/composables/useCurrentMenuNode'

const menu = useMenuStore()
const route = useRoute()
const currentMenuNode = useCurrentMenuNode(route.path)
const breadcrumbList = ref([])

watch(route, () => {
	const currentMenuNode = useCurrentMenuNode(route.path)
	breadcrumbList.value = currentMenuNode.breadcrumbs
})
</script>

<template>
	<a-breadcrumb :class="breadcrumbList ? '' : 'opacity-0'">
		<a-breadcrumb-item v-for="breadcrumb in breadcrumbList" :key="breadcrumb">
			<router-link v-if="breadcrumb.redirect" :to="breadcrumb.redirectPath">{{
				breadcrumb.name
			}}</router-link>
			<span v-else>{{ breadcrumb.name }}</span>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>
