<script setup>
import { ref, reactive } from 'vue'
import { Form, DatePicker as ADatePicker } from 'ant-design-vue'
import { FormEl } from '@/ant/FormComponents'
import yapi from '@/api/yapi'

const emit = defineEmits(['go-to-step-1', 'go-to-step-3'])
const initialValues = {
	auditor: '',
	dueDate: '',
}
const formData = reactive({ ...initialValues })
const formRules = reactive({
	auditor: [{ required: true, message: '請選擇審核者' }],
})

const { validate, validateInfos } = Form.useForm(formData, formRules)

const creatorOptions = ref([])
// 取得所有使用者
const getAllUsers = () => {
	yapi
		.get('/users')
		.then((res) => {
			if (res.status === 200) return res.data
		})
		.then((data) => {
			creatorOptions.value = data
		})
}
getAllUsers()

const submit = () => {
	validate()
		.then(() => {
			emit('go-to-step-3', formData)
		})
		.catch((err) => console.log('errors ', err))
}
</script>

<template>
	<FormEl.AForm
		:model="formData"
		:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
		:colon="false"
	>
		<FormEl.AFormItem label="審核者" v-bind="validateInfos.auditor">
			<FormEl.ASelect v-model:value="formData.auditor" show-search>
				<FormEl.ASelectOption
					v-for="user in creatorOptions"
					:key="user"
					:value="user.name"
					>{{ user.name }}</FormEl.ASelectOption
				>
			</FormEl.ASelect>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="審核期限">
			<ADatePicker v-model:value="formData.dueDate"></ADatePicker>
		</FormEl.AFormItem>
		<div class="flex gap-x-2 justify-end">
			<MButton @click="emit('go-to-step-1')">上一步</MButton>
			<MButton @click="submit" type="primary">完成</MButton>
		</div>
	</FormEl.AForm>
</template>
