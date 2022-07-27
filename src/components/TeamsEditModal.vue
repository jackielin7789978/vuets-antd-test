<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Form, message } from 'ant-design-vue'
import { getAllUsers } from '@/api/users'
import { editTeam } from '@/api/teams'

const props = defineProps({
	detail: {
		type: Object,
	},
})
const emit = defineEmits(['close-modal'])

const formData = reactive({})
const formRules = reactive({
	name: [{ required: true, message: '此為必填欄位' }],
})

const { resetFields, validate, validateInfos } = Form.useForm(
	formData,
	formRules
)

const memberOptions = ref([])
onMounted(async () => {
	memberOptions.value = await getAllUsers()
	Object.assign(formData, { ...props.detail })
})

// 送出表單
const onSubmit = async () => {
	try {
		await validate()
		try {
			// 如未變更名稱，直接關閉 Modal 不 call API
			if (formData.name === props.detail.name) {
				return emit('close-modal')
			}
			let res = await editTeam(props.detail.name, formData)
			if (!res.ok) {
				message.error(res.message)
				throw 'something went wrong'
			}
			message.success('編輯成功！')
			emit('close-modal', res.updatedTeam)
			resetFields()
		} catch (err) {
			console.log(err)
		}
	} catch (err) {
		console.log('validation failed', err)
	}
}
</script>

<template>
	<a-modal
		ok-text="儲存"
		cancel-text="取消"
		@ok="onSubmit"
		:closable="false"
		class="!w-[45%]"
	>
		<template #title>
			<h3 class="font-semibold">編輯團隊</h3>
		</template>
		<a-form
			:model="formData"
			:label-col="{ span: 6 }"
			class="w-4/5 md:w-2/3 mx-auto py-4"
		>
			<a-form-item label="團隊名稱" v-bind="validateInfos.name">
				<a-input v-model:value="formData.name" />
			</a-form-item>
			<a-form-item label="成員" v-bind="validateInfos.members">
				<a-select v-model:value="formData.members" mode="multiple">
					<a-select-option
						v-for="member in memberOptions"
						:key="member.id"
						:value="member.name"
						>{{ member.name }}</a-select-option
					>
				</a-select>
			</a-form-item>
		</a-form>
	</a-modal>
</template>
