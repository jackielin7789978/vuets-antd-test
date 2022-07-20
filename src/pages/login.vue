<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Form } from 'ant-design-vue'
import yapi from '@/api/yapi'

const router = useRouter()

// 若使用者已登入，直接導向 dashboard
const user = localStorage.getItem('user')
if (user) router.push('/dashboard')
const formData = reactive({
	username: '',
	password: '',
})
const formRules = reactive({
	username: [{ required: true, message: '請輸入使用者名稱' }],
	password: [{ required: true, message: '請輸入密碼' }],
})
const { validate, validateInfos } = Form.useForm(formData, formRules)
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
		<a-form
			@submit.prevent="handleLogin"
			:model="formData"
			layout="vertical"
			:colon="false"
		>
			<a-form-item v-bind="validateInfos.username" class="lg:pt-4">
				<template #label>
					<span class="lg:text-16px">使用者名稱</span>
				</template>
				<a-input v-model:value="formData.username"></a-input>
			</a-form-item>
			<a-form-item v-bind="validateInfos.password" class="lg:pt-4">
				<template #label>
					<span class="lg:text-16px">密碼</span>
				</template>
				<a-input-password v-model:value="formData.password"></a-input-password>
			</a-form-item>
			<BasicButton
				submit
				type="primary"
				class="w-full mt-4 lg:text-18px lg:mt-6"
				size="large"
				>登入</BasicButton
			>
		</a-form>
	</a-card>
</template>

<route lang="yaml">
meta:
  layout: loginLayout
</route>
