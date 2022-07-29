<script setup>
import checked from '@/assets/checked.png'
const props = defineProps({
	message: String,
})
</script>

<template>
	<a-result :title="props.message">
		<template #icon>
			<img :src="checked" class="w-16 mx-auto" alt="" />
		</template>
		<template #extra>
			<slot></slot>
		</template>
	</a-result>
</template>
