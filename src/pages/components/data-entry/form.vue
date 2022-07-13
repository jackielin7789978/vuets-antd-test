<script setup>
import { reactive, ref } from 'vue'

const loginForm = ref()
const loginFormData = reactive({
	username: '',
	password: '',
	rememberUser: false,
})

const personalForm = ref()
const personalFormData = reactive({
	name: '',
	email: '',
	phone: '',
	interests: [],
	catDog: '',
})

const resetForm = (target) => {
	switch (target) {
		case 'login':
			loginForm.value.resetFields()
			break
		case 'personal':
			personalForm.value.resetFields()
	}
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">表單</h1>
	<a-row class="mb-6" :gutter="12">
		<a-col :span="11">
			<h1 class="text-lg font-semibold">登入</h1>
			<a-card>
				<a-form
					ref="loginForm"
					:model="loginFormData"
					:label-col="{ span: 6 }"
					:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
				>
					<a-form-item label="使用者名稱" name="username">
						<a-input v-model:value="loginFormData.username" />
					</a-form-item>
					<a-form-item label="密碼" name="password">
						<a-input-password v-model:value="loginFormData.password" />
					</a-form-item>
					<a-form-item name="rememberUser" :wrapper-col="{ sm: { offset: 6 } }">
						<a-checkbox v-model:checked="loginFormData.rememberUser"
							>記住我</a-checkbox
						>
					</a-form-item>

					<a-form-item :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
						<BasicButton @click="resetForm('login')" class="mr-4" danger
							>清除</BasicButton
						>
						<BasicButton type="primary" html-type="submit">送出</BasicButton>
					</a-form-item>
				</a-form>
			</a-card>
		</a-col>
		<a-col :span="13">
			<h1 class="text-lg font-semibold">編輯個人資料</h1>
			<a-card>
				<a-form
					ref="personalForm"
					:model="personalFormData"
					:label-col="{ span: 6 }"
					:wrapper-col="{ sm: 24, md: 16, xl: 12 }"
				>
					<a-form-item label="姓名" name="name">
						<a-input v-model:value="personalFormData.name" />
					</a-form-item>
					<a-form-item label="電子郵件" name="email">
						<a-input v-model:value="personalFormData.email" />
					</a-form-item>
					<a-form-item label="連絡電話" name="phone">
						<a-input-number
							class="w-1/2"
							v-model:value="personalFormData.phone"
						/>
					</a-form-item>
					<a-form-item label="興趣" name="interests">
						<a-checkbox-group v-model:value="personalFormData.interests">
							<a-checkbox value="音樂" name="interests">音樂</a-checkbox>
							<a-checkbox value="運動" name="interests">運動</a-checkbox>
							<a-checkbox value="登山" name="interests">登山</a-checkbox>
							<a-checkbox value="閱讀" name="interests">閱讀</a-checkbox>
							<a-checkbox value="電玩" name="interests">電玩</a-checkbox>
						</a-checkbox-group>
					</a-form-item>
					<a-form-item label="貓或狗" name="catDog">
						<a-radio-group v-model:value="personalFormData.catDog">
							<a-radio value="貓">貓</a-radio>
							<a-radio value="狗">狗</a-radio>
							<a-radio value="都喜歡">都喜歡</a-radio>
						</a-radio-group>
					</a-form-item>
					<a-form-item :wrapper-col="{ sm: { offset: 6 } }" class="mb-0">
						<BasicButton @click="resetForm('personal')" class="mr-4" danger
							>清除</BasicButton
						>
						<BasicButton type="primary" html-type="submit"
							>儲存變更</BasicButton
						>
					</a-form-item>
				</a-form>
			</a-card>
		</a-col>
	</a-row>
</template>

<style lang="scss">
// 移除 checkbox 的光暈特效
@keyframes antCheckboxEffect {
	0% {
		transform: scale(1);
		opacity: 0;
	}

	100% {
		transform: scale(1.6);
		opacity: 0;
	}
}
@keyframes antRadioEffect {
	0% {
		transform: scale(1);
		opacity: 0;
	}

	100% {
		transform: scale(1.6);
		opacity: 0;
	}
}
</style>
