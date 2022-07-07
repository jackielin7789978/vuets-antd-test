<script setup>
import emptyImg from '@/assets/bankrupt.png'

const props = defineProps({
	description: String,
})
</script>

<template>
	<a-empty :image="emptyImg" class="empty p-4">
		<template #description>
			{{ props.description }}
		</template>
		<slot></slot>
	</a-empty>
</template>

<style lang="scss" scoped>
:deep(.ant-empty-image) {
	width: 100px;
	margin: auto;
}
</style>
