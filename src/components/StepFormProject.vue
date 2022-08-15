<script setup>
import { ref, reactive } from 'vue'
import {
	Form,
	FormItem,
	Select,
	SelectOption,
	Input,
	Textarea,
	RangePicker,
} from 'ant-design-vue'
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
	<Form
		:model="formData"
		:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
		:colon="false"
	>
		<FormItem label="專案名稱" v-bind="validateInfos.name">
			<Input v-model:value="formData.name"></Input>
		</FormItem>
		<FormItem label="說明" v-bind="validateInfos.description">
			<Input v-model:value="formData.description"></Input>
		</FormItem>
		<FormItem label="專案目標" v-bind="validateInfos.objective">
			<Textarea v-model:value="formData.objective" :rows="4"></Textarea>
		</FormItem>
		<FormItem label="執行期間" v-bind="validateInfos.duration">
			<RangePicker
				v-model:value="formData.duration"
				:style="{ width: '50%' }"
			/>
		</FormItem>
		<FormItem label="負責部門" v-bind="validateInfos.department">
			<Select
				v-model:value="formData.department"
				:style="{ width: '50%' }"
				show-search
			>
				<SelectOption value="研發部">研發部</SelectOption>
				<SelectOption value="專案部">專案部</SelectOption>
				<SelectOption value="業務客服部">業務客服部</SelectOption>
			</Select>
		</FormItem>
		<FormItem label="建立人" v-bind="validateInfos.creator">
			<Select
				v-model:value="formData.creator"
				:style="{ width: '50%' }"
				show-search
			>
				<SelectOption
					v-for="user in creatorOptions"
					:key="user"
					:value="user.name"
					>{{ user.name }}</SelectOption
				>
			</Select>
		</FormItem>
		<div class="flex gap-x-2 justify-end">
			<MButton @click="resetFields" danger>清除</MButton>
			<MButton @click="submit" type="primary">下一步</MButton>
		</div>
	</Form>
</template>
