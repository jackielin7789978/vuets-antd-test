<script setup>
import { reactive } from 'vue'
import { Form } from 'ant-design-vue'

const useForm = Form.useForm
const formData = reactive({
	username: '',
	password: '',
	rememberUser: false,
})
const formRules = reactive({
	username: [{ required: true, message: '請輸入使用者名稱' }],
	password: [{ required: true, message: '請輸入密碼' }],
})

const { resetFields, validate, validateInfos } = useForm(formData, formRules)

const onSubmit = () => {
	validate()
		.then(() => {
			alert(JSON.stringify(formData))
		})
		.catch((err) => console.log(err))
}
</script>

<template>
	<a-form
		@submit.prevent="onSubmit"
		:model="formData"
		:rules="formRules"
		:label-col="{ span: 6 }"
		:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
	>
		<a-form-item label="使用者名稱" v-bind="validateInfos.username">
			<a-input v-model:value="formData.username" />
		</a-form-item>
		<a-form-item label="密碼" v-bind="validateInfos.password">
			<a-input-password v-model:value="formData.password" />
		</a-form-item>
		<a-form-item
			v-bind="validateInfos.rememberUser"
			:wrapper-col="{ sm: { offset: 6 } }"
		>
			<a-checkbox v-model:checked="formData.rememberUser">記住我</a-checkbox>
		</a-form-item>

		<a-form-item :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
			<BasicButton @click="resetFields" class="mr-4" danger>清除</BasicButton>
			<BasicButton type="primary" html-type="submit">送出</BasicButton>
		</a-form-item>
	</a-form>
</template>
