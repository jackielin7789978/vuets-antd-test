<script setup lang="ts">
import { computed } from 'vue'
import { COLORS } from '@/style/colors'
import { Tag } from 'ant-design-vue'

interface Props {
	color?: string
	ghost?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	ghost: false,
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
	<Tag :color="customColor">
		<slot></slot>
	</Tag>
</template>
