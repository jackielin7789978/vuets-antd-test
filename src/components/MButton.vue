<script lang="ts">
// export in seperate script tag for later refernce in the <script setup> tag below
export enum ButtonTypes {
	default = 'default',
	primary = 'primary',
	link = 'link',
	ghost = 'ghost',
	dashed = 'dashed',
	text = 'text',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Button as AButton } from 'ant-design-vue'

interface Props {
	color?: string
	danger?: boolean
	disabled?: boolean
	loading?: boolean
	ghost?: boolean
	type?: ButtonTypes
	submit?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	color: '',
	danger: false,
	disabled: false,
	loading: false,
	ghost: false,
	type: ButtonTypes.default,
	submit: false,
})

const customClass = computed((): string => {
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
	<AButton
		:class="customClass"
		:type="type"
		:danger="danger"
		:disabled="disabled"
		:loading="loading"
		:ghost="ghost"
		:htmlType="submit ? 'submit' : 'button'"
	>
		<slot></slot>
	</AButton>
</template>

<style lang="scss">
// globally overrides antdv button styles
// primary 按鈕 hover 背景色加深
.ant-btn.ant-btn-primary {
	background-color: $primary-color;
	border-color: $primary-color;
	color: white;

	&:hover {
		background-color: desaturate(darken($primary-color, 6%), 8%);
		border-color: desaturate(darken($primary-color, 6%), 8%);
	}
	&:active {
		background-color: lighten($primary-color, 4%);
		border-color: lighten($primary-color, 4%);
	}
}
.ant-btn.ant-btn-primary.ant-btn-background-ghost {
	background-color: transparent;
	color: $primary-color;

	&:hover {
		color: lighten($primary-color, 8%);
		border-color: lighten($primary-color, 8%);
	}
	&:active {
		color: darken($primary-color, 4%) !important;
		border-color: darken($primary-color, 4%) !important;
	}
}
.ant-btn.ant-btn-primary.ant-btn-dangerous {
	background-color: $danger-color;
	border-color: $danger-color;
	color: white;

	&:hover {
		background-color: desaturate(darken($danger-color, 6%), 8%);
		border-color: desaturate(darken($danger-color, 6%), 8%);
	}
	&:active {
		background-color: lighten($danger-color, 4%);
		border-color: lighten($danger-color, 4%);
	}
}
.ant-btn.ant-btn-primary.ant-btn-dangerous.ant-btn-background-ghost {
	background-color: transparent;
	color: $danger-color;

	&:hover {
		color: lighten($danger-color, 8%);
		border-color: lighten($danger-color, 8%);
	}
	&:active {
		color: darken($danger-color, 4%) !important;
		border-color: darken($danger-color, 4%) !important;
	}
}

// 自訂色 success & warning
// type="default"
.ant-btn.ant-btn-success,
.ant-btn.ant-btn-success.ant-btn-background-ghost {
	background-color: transparent;
	color: $success-color;
	border-color: $success-color;
	&:hover {
		color: lighten($success-color, 8%);
		border-color: lighten($success-color, 8%);
	}
	&:active {
		color: darken($success-color, 5%) !important;
		border-color: darken($success-color, 5%) !important;
	}
}
// type="primary"
.ant-btn.ant-btn-success.ant-btn-primary {
	background-color: $success-color;
	border-color: $success-color;
	color: white;

	&:hover {
		background-color: desaturate(darken($success-color, 6%), 8%);
		border-color: desaturate(darken($success-color, 6%), 8%);
	}
	&:active {
		background-color: lighten($success-color, 4%);
		border-color: lighten($success-color, 4%) !important;
		color: white !important;
	}
}

.ant-btn.ant-btn-success.ant-btn-dashed {
	background-color: transparent;
	color: $success-color;
	border-color: $success-color;
	border-style: dashed;
}
.ant-btn.ant-btn-warning,
.ant-btn.ant-btn-warning.ant-btn-background-ghost {
	background: transparent;
	color: $warning-color;
	border-color: $warning-color;

	&:hover {
		color: lighten($warning-color, 8%);
		border-color: lighten($warning-color, 8%);
	}
	&:active {
		color: darken($warning-color, 5%) !important;
		border-color: darken($warning-color, 5%) !important;
	}
}
.ant-btn.ant-btn-warning.ant-btn-primary {
	background-color: $warning-color;
	border-color: $warning-color;
	color: white;

	&:hover {
		background-color: desaturate(darken($warning-color, 6%), 8%);
		border-color: desaturate(darken($warning-color, 6%), 8%);
	}
	&:active {
		background-color: lighten($warning-color, 4%);
		border-color: lighten($warning-color, 4%) !important;
		color: white !important;
	}
}

.ant-btn.ant-btn-warning.ant-btn-dashed {
	background-color: transparent;
	color: $warning-color;
	border-color: $warning-color;
	border-style: dashed;
}

// 為自訂義的 success 和 warning 文字按鈕加上 hover 淺灰背景
.ant-btn.ant-btn-success-text {
	background-color: transparent;
	border-color: transparent;
	color: $success-color;

	&:hover {
		background-color: #fafafa;
	}
}
.ant-btn.ant-btn-warning-text {
	background-color: transparent;
	border-color: transparent;
	color: $warning-color;

	&:hover {
		background-color: #fafafa;
	}
}

.ant-btn[disabled],
.ant-btn[disabled]:hover,
.ant-btn[disabled]:active,
.ant-btn[disabled]:focus {
	color: #909090;
	border-color: #d9d9d9;
	background: #f5f5f5;
	text-shadow: none;
	box-shadow: none;

	&.ant-btn-background-ghost {
		color: #777;
		border-color: #c7c7c7;
		background: transparent;
	}
}
</style>
