<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Form, message } from 'ant-design-vue'
import { getAllUsers } from '@/api/users'
import { addNewTeam } from '@/api/teams'

defineProps({
	parentTeam: {
		type: String,
	},
})
const emit = defineEmits(['close-modal'])
const initialValues = {
	name: '',
	members: [],
}
const formData = reactive({ ...initialValues })
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
})

// 送出表單
const addTeam = async () => {
	try {
		await validate()
		try {
			let res = await addNewTeam(formData)
			if (!res.ok) throw 'something went wrong'
			message.success('新增成功！')
			emit('close-modal')
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
		ok-text="新增"
		cancel-text="取消"
		@ok="addTeam"
		:closable="false"
		class="!w-[45%]"
	>
		<template #title>
			<h3 class="font-semibold">新增子團隊</h3>
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
