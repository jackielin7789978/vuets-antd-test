<script setup>
import { Result as AResult } from 'ant-design-vue'
import checked from '@/assets/checked.png'
const props = defineProps({
	message: String,
})
</script>

<template>
	<AResult :title="props.message">
		<template #icon>
			<img :src="checked" class="w-16 mx-auto" alt="" />
		</template>
		<template #extra>
			<slot></slot>
		</template>
	</AResult>
</template>
