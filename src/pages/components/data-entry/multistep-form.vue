<script setup>
import { reactive, ref } from 'vue'
import { Step as AStep, Steps as ASteps } from 'ant-design-vue'

const currentStep = ref(0)
const result = reactive({})

const goToStep2 = (payload) => {
	Object.assign(result, payload)
	currentStep.value++
}

const goToStep3 = (payload) => {
	Object.assign(result, result, payload)
	currentStep.value++
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">多步驟表單</h1>
	<a-card>
		<template #title>
			<div class="text-xl font-semibold">建立新專案</div>
		</template>
		<!-- Step 元件 -->
		<a-row class="mt-4">
			<a-col :xs="{ span: 24 }" :xl="{ span: 18, offset: 3 }">
				<ASteps :current="currentStep">
					<AStep>
						<template #title>
							<span class="select-none">填寫專案資料</span>
						</template>
					</AStep>
					<AStep>
						<template #title>
							<span class="select-none">設定審核流程</span>
						</template>
					</AStep>
					<AStep>
						<template #title>
							<span class="select-none">完成</span>
						</template>
					</AStep>
				</ASteps>
			</a-col>
		</a-row>
		<!-- 表單及結果 -->
		<a-row class="mt-12 mb-4">
			<!-- Step 1 -->
			<a-col
				:xs="{ span: 24 }"
				:xl="{ span: 12, offset: 6 }"
				v-if="currentStep === 0"
			>
				<StepFormProject
					@go-to-step-2="
						(formData) => {
							goToStep2(formData)
						}
					"
				/>
			</a-col>
			<!-- Step 2 -->
			<a-col
				:xs="{ span: 24 }"
				:xl="{ span: 6, offset: 9 }"
				v-else-if="currentStep === 1"
			>
				<StepFormAudit
					@go-to-step-1="currentStep = 0"
					@go-to-step-3="
						(formData) => {
							goToStep3(formData)
						}
					"
				/>
			</a-col>
			<!-- Step 3 -->
			<a-col
				v-else-if="currentStep === 2"
				:xs="{ span: 24 }"
				:xl="{ span: 18, offset: 3 }"
			>
				<StepFormResult :result="result" />
			</a-col>
		</a-row>
	</a-card>
</template>

<route lang="json">
{
	"meta": {
		"requiresLogin": true
	}
}
</route>
