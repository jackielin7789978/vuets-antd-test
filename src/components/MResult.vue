<script setup>
import { Result } from 'ant-design-vue'
import checked from '@/assets/checked.png'
const props = defineProps({
	message: String,
})
</script>

<template>
	<Result :title="props.message">
		<template #icon>
			<img :src="checked" class="w-16 mx-auto" alt="" />
		</template>
		<template #extra>
			<slot></slot>
		</template>
	</Result>
</template>
