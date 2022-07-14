<script setup>
import { reactive, toRaw } from 'vue'
import { Form } from 'ant-design-vue'

const useForm = Form.useForm
const formData = reactive({
	name: '',
	email: '',
	phone: '',
	interests: [],
	catDog: '',
})
const formRules = reactive({
	name: [{ required: true, message: '請輸入姓名' }],
	email: [{ required: true, message: '請輸入電子郵件' }],
})

const { resetFields, validate, validateInfos } = useForm(formData, formRules)

const onSubmit = () => {
	validate()
		.then(() => {
			console.log(toRaw(formData))
		})
		.catch((err) => console.log(err))
}
</script>

<template>
	<a-form
		@submit.prevent="onSubmit"
		:model="formData"
		:label-col="{ span: 6 }"
		:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
	>
		<a-form-item label="姓名" v-bind="validateInfos.name">
			<a-input v-model:value="formData.name" />
		</a-form-item>
		<a-form-item label="電子郵件" v-bind="validateInfos.email">
			<a-input v-model:value="formData.email" />
		</a-form-item>
		<a-form-item label="連絡電話" v-bind="validateInfos.phone">
			<a-input-number class="w-1/2" v-model:value="formData.phone" />
		</a-form-item>
		<a-form-item label="興趣" v-bind="validateInfos.interests">
			<a-checkbox-group v-model:value="formData.interests">
				<a-checkbox value="音樂" v-bind="validateInfos.interests"
					>音樂</a-checkbox
				>
				<a-checkbox value="運動" v-bind="validateInfos.interests"
					>運動</a-checkbox
				>
				<a-checkbox value="登山" v-bind="validateInfos.interests"
					>登山</a-checkbox
				>
				<a-checkbox value="閱讀" v-bind="validateInfos.interests"
					>閱讀</a-checkbox
				>
				<a-checkbox value="電玩" v-bind="validateInfos.interests"
					>電玩</a-checkbox
				>
			</a-checkbox-group>
		</a-form-item>
		<a-form-item label="貓或狗" v-bind="validateInfos.catDog">
			<a-radio-group v-model:value="formData.catDog">
				<a-radio value="貓">貓</a-radio>
				<a-radio value="狗">狗</a-radio>
				<a-radio value="都喜歡">都喜歡</a-radio>
			</a-radio-group>
		</a-form-item>
		<a-form-item :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
			<BasicButton @click="resetFields" class="mr-4" danger>清除</BasicButton>
			<BasicButton type="primary" html-type="submit">儲存變更</BasicButton>
		</a-form-item>
	</a-form>
</template>
