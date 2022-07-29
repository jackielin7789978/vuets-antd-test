<script setup>
defineProps({
	item: Object,
	default: () => {},
})
</script>

<template>
	<a-menu-item :key="item.path">
		<template #icon>
			<SiderMenuIcon :iconComponent="item.icon" />
		</template>
		<router-link :to="item.path">{{ item.name }}</router-link>
	</a-menu-item>
</template>
