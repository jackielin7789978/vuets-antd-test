<script setup>
import { computed } from 'vue'
import { COLORS } from '@/style/colors'
const props = defineProps({
	color: {
		type: String,
	},
	ghost: {
		type: Boolean,
		default: false,
	},
})

const customColor = computed(() => {
	if (props.ghost) return props.color

	switch (props.color) {
		case 'primary':
			return COLORS.primary
		case 'success':
			return COLORS.success
		case 'warning':
			return COLORS.warning
		case 'error':
			return COLORS.error
		default:
			return props.color
	}
})
</script>

<template>
	<a-tag :color="customColor">
		<slot></slot>
	</a-tag>
</template>
