<script setup>
import { ref, watchEffect } from 'vue'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons-vue'
import { OnClickOutside } from '@vueuse/components'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const localVal = ref(props.modelValue)
watchEffect(() => {
	localVal.value = props.modelValue
})

const isFocused = ref(false)

const onModifyValue = (increase) => {
	if (increase) {
		localVal.value++
	} else {
		localVal.value--
	}
	emit('update:modelValue', localVal)
}
</script>

<template>
	<OnClickOutside
		@trigger="isFocused = false"
		:class="{ 'custom-input-number-focused': isFocused }"
		class="ant-input-number"
	>
		<div class="ant-input-number-handler-wrap w-18px bottom-1px">
			<span
				@click="onModifyValue(true)"
				class="custom-input-number-handler up select-none"
				aria-label="Increase Value"
				aria-disabled="false"
			>
				<CaretUpOutlined class="arrowIcon" />
			</span>
			<span
				@click="onModifyValue(false)"
				class="custom-input-number-handler down select-none"
				aria-label="Decrease Value"
				aria-disabled="false"
			>
				<CaretDownOutlined class="arrowIcon" />
			</span>
		</div>
		<div class="ant-input-number-input-wrap">
			<input
				type="number"
				class="ant-input-number-input"
				v-model="localVal"
				@input="$emit('update:modelValue', localVal)"
				@focus="isFocused = true"
			/>
		</div>
	</OnClickOutside>
</template>

<style lang="scss" scoped>
.custom-input-number-focused {
	border-color: $primary-focus !important;
	box-shadow: 0 0 0 2px rgba(15, 196, 202, 20%) !important;
}
.custom-input-number-handler {
	position: relative;
	display: block;
	width: 100%;
	height: 50%;
	overflow: hidden;
	color: #464646;
	font-weight: bold;
	line-height: 0;
	text-align: center;
	border-left: 1px solid #e7e7e7;
	transition: all 0.1s linear;
	cursor: pointer;

	&.up {
		border-radius: 0 4px 0 0;
	}
	&.down {
		border-top: 1px solid #e7e7e7;
		border-radius: 0 0 4px 0;
	}

	&:hover {
		.arrowIcon {
			transform: scale(0.85);
		}
	}
	&:active {
		background-color: #f0f0f099;
	}
}
.arrowIcon {
	transform: scale(0.7);
	transition: all 0.2s ease;
}
</style>
