<script setup>
import { ref, reactive } from 'vue'
import { Form } from 'ant-design-vue'
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
	<a-form
		:model="formData"
		:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
		:colon="false"
	>
		<a-form-item label="審核者" v-bind="validateInfos.auditor">
			<a-select v-model:value="formData.auditor" show-search>
				<a-select-option
					v-for="user in creatorOptions"
					:key="user"
					:value="user.name"
					>{{ user.name }}</a-select-option
				>
			</a-select>
		</a-form-item>
		<a-form-item label="審核期限">
			<a-date-picker v-model:value="formData.dueDate"></a-date-picker>
		</a-form-item>
		<div class="flex gap-x-2 justify-end">
			<BasicButton @click="emit('go-to-step-1')">上一步</BasicButton>
			<BasicButton @click="submit" type="primary">完成</BasicButton>
		</div>
	</a-form>
</template>
