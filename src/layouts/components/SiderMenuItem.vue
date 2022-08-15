<script setup lang="ts">
import { MenuItem } from 'ant-design-vue'
interface Props {
	item: {
		path: string
		icon?: string
		name: string
	}
}
defineProps<Props>()
</script>

<template>
	<MenuItem :key="item.path">
		<template #icon>
			<SiderMenuIcon :iconComponent="item.icon" />
		</template>
		<router-link :to="item.path">{{ item.name }}</router-link>
	</MenuItem>
</template>
