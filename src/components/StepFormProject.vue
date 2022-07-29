<script setup>
import { ref, reactive } from 'vue'
import { Form } from 'ant-design-vue'
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
	<a-form
		:model="formData"
		:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
		:colon="false"
	>
		<a-form-item label="專案名稱" v-bind="validateInfos.name">
			<a-input v-model:value="formData.name"></a-input>
		</a-form-item>
		<a-form-item label="說明" v-bind="validateInfos.description">
			<a-input v-model:value="formData.description"></a-input>
		</a-form-item>
		<a-form-item label="專案目標" v-bind="validateInfos.objective">
			<a-textarea v-model:value="formData.objective" :rows="4"></a-textarea>
		</a-form-item>
		<a-form-item label="執行期間" v-bind="validateInfos.duration">
			<a-range-picker
				v-model:value="formData.duration"
				:style="{ width: '50%' }"
			/>
		</a-form-item>
		<a-form-item label="負責部門" v-bind="validateInfos.department">
			<a-select
				v-model:value="formData.department"
				:style="{ width: '50%' }"
				show-search
			>
				<a-select-option value="研發部">研發部</a-select-option>
				<a-select-option value="專案部">專案部</a-select-option>
				<a-select-option value="業務客服部">業務客服部</a-select-option>
			</a-select>
		</a-form-item>
		<a-form-item label="建立人" v-bind="validateInfos.creator">
			<a-select
				v-model:value="formData.creator"
				:style="{ width: '50%' }"
				show-search
			>
				<a-select-option
					v-for="user in creatorOptions"
					:key="user"
					:value="user.name"
					>{{ user.name }}</a-select-option
				>
			</a-select>
		</a-form-item>
		<div class="flex gap-x-2 justify-end">
			<BasicButton @click="resetFields" danger>清除</BasicButton>
			<BasicButton @click="submit" type="primary">下一步</BasicButton>
		</div>
	</a-form>
</template>
