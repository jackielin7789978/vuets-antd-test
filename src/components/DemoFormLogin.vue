<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputPassword, Checkbox } from 'ant-design-vue'

const initialValues = {
	username: '',
	password: '',
	rememberUser: false,
}
const formData = reactive({
	...initialValues,
})
const formRules = reactive({
	username: [{ required: true, message: '請輸入使用者名稱' }],
	password: [
		{ required: true, message: '請輸入密碼' },
		{
			min: 8,
			max: 20,
			message: '密碼必須介於 8 ~ 20 個字元之間',
			trigger: 'blur',
		},
	],
})

const { resetFields, validate, validateInfos } = Form.useForm(
	formData,
	formRules
)

const onSubmit = () => {
	validate()
		.then(() => {
			alert(JSON.stringify(formData))
			Object.assign(formData, initialValues)
			resetFields()
		})
		.catch((err) => console.log(err))
}
</script>

<template>
	<Form
		@submit.prevent="onSubmit"
		:model="formData"
		:label-col="{ span: 6 }"
		:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
	>
		<FormItem label="使用者名稱" v-bind="validateInfos.username">
			<Input v-model:value="formData.username" />
		</FormItem>
		<FormItem label="密碼" v-bind="validateInfos.password">
			<InputPassword v-model:value="formData.password" />
		</FormItem>
		<FormItem
			v-bind="validateInfos.rememberUser"
			:wrapper-col="{ sm: { offset: 6 } }"
		>
			<Checkbox v-model:checked="formData.rememberUser">記住我</Checkbox>
		</FormItem>

		<FormItem :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
			<MButton @click="resetFields" class="mr-4" danger>清除</MButton>
			<MButton type="primary" html-type="submit">送出</MButton>
		</FormItem>
	</Form>
</template>
