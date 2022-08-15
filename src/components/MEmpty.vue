<script setup lang="ts">
import { Empty } from 'ant-design-vue'
import emptyImg from '@/assets/bankrupt.png'

const props = defineProps({
	description: String,
})
</script>

<template>
	<Empty :image="emptyImg" class="empty p-4">
		<template #description>
			{{ props.description }}
		</template>
		<slot></slot>
	</Empty>
</template>

<style lang="scss" scoped>
:deep(.ant-empty-image) {
	width: 100px;
	margin: auto;
}
</style>
