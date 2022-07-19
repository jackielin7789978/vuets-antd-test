<script setup>
import { ref, reactive } from 'vue'
import { Form } from 'ant-design-vue'
import { SmileFilled } from '@ant-design/icons-vue'
import yapi from '@/api/yapi'

const currentStep = ref(0)

// 第一步表單
const projectSetup = {
	name: '',
	description: '',
	objective: '',
	department: '',
	duration: [],
	creator: '',
}
const projectForm = reactive({ ...projectSetup })
const { resetFields: resetProject, validate: validateProject } = Form.useForm(
	projectForm,
	ref({})
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

const submitProjectForm = () => {
	validateProject().then(() => {
		// console.log(toRaw(projectForm.duration[0].$d))
		// console.log(toRaw(projectForm.duration[1].$d))
		currentStep.value = 1
	})
}

// 第二步表單
const auditSetup = {
	auditor: '',
	dueDate: '',
	saveAsDefault: 'false',
}
const auditForm = reactive({ ...auditSetup })
const { resetFields: resetAudit, validate: validateAudit } = Form.useForm(
	auditForm,
	ref({})
)
const submitAuditForm = () => {
	validateAudit().then(() => {
		currentStep.value = 2
		getResults()
	})
}
// 結果頁
const projectDetails = {}
const getResults = () => {
	Object.assign(projectDetails, { ...projectForm }, { ...auditForm })
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">多步驟表單</h1>
	<a-card>
		<template #title>
			<div>建立新專案</div>
		</template>
		<a-row class="mt-4">
			<a-col :xs="{ span: 24 }" :xl="{ span: 20, offset: 2 }">
				<a-steps :current="currentStep">
					<a-step>
						<template #title>
							<span class="select-none">填寫專案資料</span>
						</template>
					</a-step>
					<a-step>
						<template #title>
							<span class="select-none">設定審核流程</span>
						</template>
					</a-step>
					<a-step>
						<template #title>
							<span class="select-none">完成</span>
						</template>
					</a-step>
				</a-steps>
			</a-col>
		</a-row>
		<a-row class="mt-12">
			<a-col
				:xs="{ span: 24 }"
				:xl="{ span: 12, offset: 6 }"
				v-if="currentStep === 0"
			>
				<a-form
					v-if="currentStep === 0"
					:model="projectForm"
					:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
					:colon="false"
				>
					<a-form-item label="專案名稱">
						<a-input v-model:value="projectForm.name"></a-input>
					</a-form-item>
					<a-form-item label="說明">
						<a-input v-model:value="projectForm.description"></a-input>
					</a-form-item>
					<a-form-item label="專案目標">
						<a-textarea
							v-model:value="projectForm.objective"
							:rows="4"
						></a-textarea>
					</a-form-item>
					<a-form-item label="執行期間">
						<a-range-picker
							v-model:value="projectForm.duration"
							:style="{ width: '50%' }"
						/>
					</a-form-item>
					<a-form-item label="負責部門">
						<a-select
							v-model:value="projectForm.department"
							:style="{ width: '50%' }"
							show-search
						>
							<a-select-option value="研發部">研發部</a-select-option>
							<a-select-option value="專案部">專案部</a-select-option>
							<a-select-option value="業務客服部">業務客服部</a-select-option>
						</a-select>
					</a-form-item>
					<a-form-item label="建立人">
						<a-select
							v-model:value="projectForm.creator"
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
						<BasicButton @click="resetProject" danger>清除</BasicButton>
						<BasicButton @click="submitProjectForm" type="primary"
							>下一步</BasicButton
						>
					</div>
				</a-form>
			</a-col>
			<a-col
				:xs="{ span: 24 }"
				:xl="{ span: 6, offset: 9 }"
				v-else-if="currentStep === 1"
			>
				<a-form
					:model="auditForm"
					:label-col="{ sm: { span: 4 }, xl: { span: 6 } }"
					:colon="false"
				>
					<a-form-item label="審核者">
						<a-select v-model:value="auditForm.auditor" show-search>
							<a-select-option
								v-for="user in creatorOptions"
								:key="user"
								:value="user.name"
								>{{ user.name }}</a-select-option
							>
						</a-select>
					</a-form-item>
					<a-form-item label="審核期限">
						<a-date-picker v-model:value="auditForm.dueDate"></a-date-picker>
					</a-form-item>
					<div class="flex gap-x-2 justify-end">
						<BasicButton @click="currentStep = 0">上一步</BasicButton>
						<BasicButton @click="submitAuditForm" type="primary"
							>完成</BasicButton
						>
					</div>
				</a-form>
			</a-col>
			<a-col
				v-else-if="currentStep === 2"
				xs="{ span: 24 }"
				:xl="{ span: 18, offset: 3 }"
			>
				<a-result title="成功建立專案">
					<template #icon>
						<SmileFilled />
					</template>
				</a-result>
				<a-descriptions title="專案詳細資訊">
					<a-descriptions-item label="專案名稱">
						{{ projectDetails.name }}
					</a-descriptions-item>
					<a-descriptions-item label="專案說明">
						{{ projectDetails.description }}
					</a-descriptions-item>
					<a-descriptions-item label="專案目標">
						{{ projectDetails.objective }}
					</a-descriptions-item>
					<a-descriptions-item label="負責部門">
						{{ projectDetails.department }}
					</a-descriptions-item>
					<a-descriptions-item label="執行期間">
						起：{{ projectDetails.duration[0] }} <br />
						訖：{{ projectDetails.duration[1] }}
					</a-descriptions-item>
					<a-descriptions-item label="建立人">
						{{ projectDetails.creator }}
					</a-descriptions-item>
					<a-descriptions-item label="審核者">
						{{ projectDetails.auditor }}
					</a-descriptions-item>
					<a-descriptions-item label="審核期限">
						{{ projectDetails.dueDate }}
					</a-descriptions-item>
				</a-descriptions>
			</a-col>
		</a-row>
	</a-card>
</template>
