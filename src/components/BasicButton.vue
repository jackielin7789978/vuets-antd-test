<script setup>
import { computed } from 'vue'

const props = defineProps({
	color: {
		type: String,
		default: '',
	},
	danger: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	ghost: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: 'default',
	},
})

const customClass = computed(() => {
	if (!props.color || props.disabled) return ''
	switch (props.color) {
		case 'success':
			return props.type === 'text' ? 'ant-btn-success-text' : 'ant-btn-success'
		case 'warning':
			return props.type === 'text' ? 'ant-btn-warning-text' : 'ant-btn-warning'
		default:
			return ''
	}
})
</script>

<template>
	<a-button
		:class="customClass"
		:type="type"
		:danger="danger"
		:disabled="disabled"
		:loading="loading"
		:ghost="ghost"
	>
		<slot></slot>
	</a-button>
</template>

<style lang="scss" scoped>
.ant-btn.ant-btn-success {
	background-color: #00cdad;
	border-color: #00cdad;
	color: white;

	&:hover {
		background-color: rgba(5, 177, 151, 0.873);
		border-color: rgba(5, 177, 151, 0.873);
	}
}
.ant-btn.ant-btn-warning {
	background-color: #ff8737;
	border-color: #ff8737;
	color: white;

	&:hover {
		background-color: #ff8737cc;
		border-color: #ff8737cc;
	}
}

.ant-btn.ant-btn-success-text {
	background-color: transparent;
	border-color: transparent;
	color: #00cdad;

	&:hover {
		background-color: #fafafa;
	}
}
.ant-btn.ant-btn-warning-text {
	background-color: transparent;
	border-color: transparent;
	color: #ff8737;

	&:hover {
		background-color: #fafafa;
	}
}
</style>
