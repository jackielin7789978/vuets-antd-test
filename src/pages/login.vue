<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
	Form as AForm,
	Input as AInput,
	InputPassword as AInputPassword,
} from 'ant-design-vue'
import yapi from '@/api/yapi'
import { useUserStore } from '@/stores/user'
const AFormItem = AForm.Item

const router = useRouter()
const userStore = useUserStore()
const formData = reactive({
	username: '',
	password: '',
})
const formRules = reactive({
	username: [{ required: true, message: '請輸入使用者名稱' }],
	password: [{ required: true, message: '請輸入密碼' }],
})
const { validate, validateInfos } = AForm.useForm(formData, formRules)
const validateUser = () => {
	yapi
		.post('/login', {
			username: formData.username,
			password: formData.password,
		})
		.then((res) => {
			if (res.status === 200) return res.data
		})
		.then((data) => {
			if (!data.ok) return alert('帳號密碼錯誤')
			alert('登入成功')

			// 把使用者資訊同步存入 Pinia 和 localStorage
			userStore.userInfo = data
			localStorage.setItem(
				'user',
				JSON.stringify({
					role: data.userRole,
				})
			)
			router.push('/dashboard')
		})
}
const handleLogin = () => {
	validate()
		.then(() => {
			// call api to validate user credentials
			validateUser()
		})
		.catch((err) => console.log('err', err))
}
</script>
<template>
	<a-card
		class="w-100 md:w-110 md:p-4 lg:w-120 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
	>
		<h3 class="text-2xl font-semibold text-center md:mb-4 lg:mb-8">登入</h3>
		<AForm
			@submit.prevent="handleLogin"
			:model="formData"
			layout="vertical"
			:colon="false"
		>
			<AFormItem v-bind="validateInfos.username" class="lg:pt-4">
				<template #label>
					<span class="lg:text-16px">使用者名稱</span>
				</template>
				<AInput
					v-model:value="formData.username"
					placeholder="superadmin"
				></AInput>
			</AFormItem>
			<AFormItem v-bind="validateInfos.password" class="lg:pt-4">
				<template #label>
					<span class="lg:text-16px">密碼</span>
				</template>
				<AInputPassword
					v-model:value="formData.password"
					placeholder="superadmin"
				></AInputPassword>
			</AFormItem>
			<MButton
				submit
				type="primary"
				class="w-full mt-4 lg:text-18px lg:mt-6"
				size="large"
				>登入</MButton
			>
		</AForm>
	</a-card>
</template>
<route lang="json">
{
	"meta": {
		"requiresLogin": false,
		"layout": "loginLayout"
	}
}
</route>
