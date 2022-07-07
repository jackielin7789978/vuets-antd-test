<script setup>
defineProps({
	item: {
		type: Object,
		default: () => {},
	},
})
</script>

<template>
	<SiderMenuItem v-if="!item.children.length" :item="item" />
	<a-sub-menu v-if="item.children.length" :key="`sub-${item.id}`">
		<template #title>
			{{ item.name }}
		</template>
		<template #icon>
			<SiderMenuIcon :iconComponent="item.icon" />
		</template>

		<template v-for="childItem in item.children" :key="childItem.path">
			<SiderSubMenuItem :item="childItem" />
		</template>
	</a-sub-menu>
</template>
