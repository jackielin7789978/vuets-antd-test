<script setup>
import yapi from '@/api/yapi'
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'

const name = ref('')
const currentTime = ref('')
const color = ref('')
const colorStyles = ref([])
yapi
	.get('/greet')
	.then((res) => {
		if (res.status === 200) {
			return res.data
		}
	})
	.then((data) => {
		name.value = data.name
		currentTime.value = data.currentTime
		color.value = data.color
	})

colorStyles.value = {
	backgroundColor: color,
	borderColor: color,
}
</script>

<template>
	<div class="bg-[#14141499] absolute inset-0">
		<OnClickOutside @trigger="$emit('close-modal')">
			<div
				class="px-8 py-4 rounded-md w-1/4 bg-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<h1>Hello {{ name }}!</h1>
				<p class="flex items-center gap-x-2 text-lg mb-8">
					Your Lucky Color Today is
					<span :style="colorStyles" class="luckyColor"></span>
				</p>
				<div class="text-right">{{ currentTime }}</div>
			</div>
		</OnClickOutside>
	</div>
</template>

<style lang="scss" scoped>
.luckyColor {
	@apply inline-block w-8 h-8 rounded-full transition-all duration-150 transform hover:scale-105;
}
</style>
