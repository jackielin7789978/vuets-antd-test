<script setup lang="ts">
import { reactive } from 'vue'
import {
	Form,
	FormItem,
	Input,
	CheckboxGroup,
	Checkbox,
	RadioGroup,
	Radio,
} from 'ant-design-vue'

const initialFormData = {
	name: '',
	email: '',
	phone: '',
	age: '',
	interests: [],
	catDog: '',
}
const formData = reactive({ ...initialFormData })
const formRules = reactive({
	name: [{ required: true, message: '請輸入姓名' }],
	email: [
		{ required: true, message: '請輸入電子郵件' },
		{ type: 'email', message: '電子郵件格式不正確', trigger: 'blur' },
	],
	phone: [
		{ required: true, message: '請輸入電話號碼' },
		{ min: 10, message: '電話號碼長度有誤', trigger: 'blur' },
	],
	age: [
		{ required: true, message: '請輸入年齡' },
		{
			type: 'number',
			min: 0,
			max: 120,
			message: '年齡必須介於 0 ~ 120 之間',
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
			// reset form value & validation
			Object.assign(formData, initialFormData)
			resetFields()
		})
		.catch((err) => console.log(err))
}
</script>

<template>
	<Form
		@submit.prevent="onSubmit"
		:model="formData"
		:label-col="{ span: 8 }"
		:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
	>
		<FormItem label="姓名" v-bind="validateInfos.name">
			<Input v-model:value="formData.name" />
		</FormItem>
		<FormItem label="電子郵件" v-bind="validateInfos.email">
			<Input v-model:value="formData.email" />
		</FormItem>
		<FormItem label="連絡電話" v-bind="validateInfos.phone">
			<Input class="w-1/2" v-model:value="formData.phone" />
		</FormItem>
		<FormItem label="年齡" v-bind="validateInfos.age">
			<MInputNumber class="w-1/2" v-model="formData.age" />
		</FormItem>

		<FormItem label="興趣" v-bind="validateInfos.interests">
			<CheckboxGroup
				v-model:value="formData.interests"
				class="custom-checkbox-group"
			>
				<Checkbox value="音樂" v-bind="validateInfos.interests">音樂</Checkbox>
				<Checkbox value="運動" v-bind="validateInfos.interests">運動</Checkbox>
				<Checkbox value="登山" v-bind="validateInfos.interests">登山</Checkbox>
				<Checkbox value="閱讀" v-bind="validateInfos.interests">閱讀</Checkbox>
				<Checkbox value="電玩" v-bind="validateInfos.interests">電玩</Checkbox>
			</CheckboxGroup>
		</FormItem>
		<FormItem label="貓或狗" v-bind="validateInfos.catDog">
			<RadioGroup v-model:value="formData.catDog">
				<Radio value="貓">貓</Radio>
				<Radio value="狗">狗</Radio>
				<Radio value="都喜歡">都喜歡</Radio>
			</RadioGroup>
		</FormItem>
		<FormItem :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
			<MButton @click="resetFields" class="mr-4" danger>清除</MButton>
			<MButton type="primary" html-type="submit">儲存</MButton>
		</FormItem>
	</Form>
</template>

<style lang="scss" scoped>
.custom-checkbox-group {
	@apply flex flex-wrap gap-2;

	:deep(label) {
		margin: 0;
	}
}
</style>
