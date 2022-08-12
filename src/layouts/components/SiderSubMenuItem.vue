<script setup lang="ts">
import { SubMenu as ASubMenu } from 'ant-design-vue'
defineProps({
	item: {
		type: Object,
		default: () => {},
	},
})
</script>

<template>
	<SiderMenuItem v-if="!item.children.length" :item="item" />
	<ASubMenu v-if="item.children.length" :key="`sub-${item.name}`">
		<template #title>
			{{ item.name }}
		</template>
		<template #icon>
			<SiderMenuIcon :iconComponent="item.icon" />
		</template>

		<template v-for="childItem in item.children" :key="childItem.path">
			<SiderSubMenuItem :item="childItem" />
		</template>
	</ASubMenu>
</template>
