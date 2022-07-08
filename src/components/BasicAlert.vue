<script setup>
import { useAlertStore } from '@/stores/alert.js'

const alert = useAlertStore()
const onClose = () => {
	setTimeout(() => {
		alert.isShown = false
	}, 1000)
}
</script>

<template>
	<a-alert
		v-if="alert.isShown"
		:type="alert.type"
		showIcon
		closable
		@close="onClose"
	>
		<template #message>
			{{ alert.message }}
		</template>
	</a-alert>
</template>
