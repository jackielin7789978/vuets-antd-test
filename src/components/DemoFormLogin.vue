<script setup lang="ts">
import { reactive } from 'vue'
import {
	Form as AForm,
	Input as AInput,
	InputPassword as AInputPassword,
	Checkbox as ACheckbox,
} from 'ant-design-vue'
const AFormItem = AForm.Item
const useForm = AForm.useForm

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

const { resetFields, validate, validateInfos } = useForm(formData, formRules)

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
	<AForm
		@submit.prevent="onSubmit"
		:model="formData"
		:label-col="{ span: 6 }"
		:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
	>
		<AFormItem label="使用者名稱" v-bind="validateInfos.username">
			<AInput v-model:value="formData.username" />
		</AFormItem>
		<AFormItem label="密碼" v-bind="validateInfos.password">
			<AInputPassword v-model:value="formData.password" />
		</AFormItem>
		<AFormItem
			v-bind="validateInfos.rememberUser"
			:wrapper-col="{ sm: { offset: 6 } }"
		>
			<ACheckbox v-model:checked="formData.rememberUser">記住我</ACheckbox>
		</AFormItem>

		<AFormItem :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
			<MButton @click="resetFields" class="mr-4" danger>清除</MButton>
			<MButton type="primary" html-type="submit">送出</MButton>
		</AFormItem>
	</AForm>
</template>
