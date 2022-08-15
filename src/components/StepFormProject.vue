<script setup>
import { ref, reactive } from 'vue'
import { Form, RangePicker as ARangePicker } from 'ant-design-vue'
import { FormEl } from '../ant/FormComponents'
import yapi from '@/api/yapi'

const emit = defineEmits(['go-to-step-2'])
const initialValues = {
	name: '',
	description: '',
	objective: '',
	department: '',
	duration: [],
	creator: '',
}
const formData = reactive({ ...initialValues })
const formRules = reactive({
	name: [{ required: true, message: '此為必填欄位' }],
})

const { resetFields, validate, validateInfos } = Form.useForm(
	formData,
	formRules
)

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
			emit('go-to-step-2', formData)
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
		<FormEl.AFormItem label="專案名稱" v-bind="validateInfos.name">
			<FormEl.AInput v-model:value="formData.name"></FormEl.AInput>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="說明" v-bind="validateInfos.description">
			<FormEl.AInput v-model:value="formData.description"></FormEl.AInput>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="專案目標" v-bind="validateInfos.objective">
			<FormEl.ATextarea
				v-model:value="formData.objective"
				:rows="4"
			></FormEl.ATextarea>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="執行期間" v-bind="validateInfos.duration">
			<ARangePicker
				v-model:value="formData.duration"
				:style="{ width: '50%' }"
			/>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="負責部門" v-bind="validateInfos.department">
			<FormEl.ASelect
				v-model:value="formData.department"
				:style="{ width: '50%' }"
				show-search
			>
				<FormEl.ASelectOption value="研發部">研發部</FormEl.ASelectOption>
				<FormEl.ASelectOption value="專案部">專案部</FormEl.ASelectOption>
				<FormEl.ASelectOption value="業務客服部"
					>業務客服部</FormEl.ASelectOption
				>
			</FormEl.ASelect>
		</FormEl.AFormItem>
		<FormEl.AFormItem label="建立人" v-bind="validateInfos.creator">
			<FormEl.ASelect
				v-model:value="formData.creator"
				:style="{ width: '50%' }"
				show-search
			>
				<FormEl.ASelectOption
					v-for="user in creatorOptions"
					:key="user"
					:value="user.name"
					>{{ user.name }}</FormEl.ASelectOption
				>
			</FormEl.ASelect>
		</FormEl.AFormItem>
		<div class="flex gap-x-2 justify-end">
			<MButton @click="resetFields" danger>清除</MButton>
			<MButton @click="submit" type="primary">下一步</MButton>
		</div>
	</FormEl.AForm>
</template>
