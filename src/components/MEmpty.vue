<script setup lang="ts">
import { Empty as AEmpty } from 'ant-design-vue'
import emptyImg from '@/assets/bankrupt.png'

const props = defineProps({
	description: String,
})
</script>

<template>
	<AEmpty :image="emptyImg" class="empty p-4">
		<template #description>
			{{ props.description }}
		</template>
		<slot></slot>
	</AEmpty>
</template>

<style lang="scss" scoped>
:deep(.ant-empty-image) {
	width: 100px;
	margin: auto;
}
</style>
