<script setup>
import { onBeforeMount, ref, reactive, toRaw } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { getRole, editRole } from '@/api/roles'
import { message } from 'ant-design-vue'

const emit = defineEmits(['close'])
const props = defineProps({
	roleId: {
		type: Number,
		default: 0,
	},
})

const roleData = ref({})
const errMessage = ref('')
const isLoading = ref(false)
const formData = reactive({})
onBeforeMount(async () => {
	let res
	try {
		isLoading.value = true
		res = await getRole(props.roleId)
		// 如回傳的資料包含 errCode，則顯示錯誤訊息
		if (Object.prototype.hasOwnProperty.call(res, 'errCode')) {
			throw res.errMessage
		}
		roleData.value = res
		Object.assign(formData, res)
	} catch (err) {
		console.log(err)
		errMessage.value = err
	} finally {
		isLoading.value = false
	}
})

const submitForm = async () => {
	let res
	try {
		emit('close')
		res = await editRole(props.roleId)
		if (Object.prototype.hasOwnProperty.call(res, 'errCode')) {
			throw res.errMessage
		}
	} catch (err) {
		console.log(err)
		errMessage.value = err
	} finally {
		message.success('編輯成功')
	}
}
</script>

<template>
	<div class="mask">
		<OnClickOutside @trigger="this.$emit('close')">
			<a-card class="detailModal">
				<template #title>
					<div class="text-xl font-semibold text-center">編輯角色</div>
				</template>
				<a-skeleton
					v-if="isLoading"
					active
					size="large"
					:paragraph="{ rows: 8 }"
				/>
				<template v-else>
					<h1 v-if="errMessage" class="errMsg">{{ errMessage }}</h1>
					<div v-else>
						<a-form :model="formData">
							<table class="mb-8">
								<tr>
									<th :style="{ width: '10%' }">角色名稱</th>
									<th>角色說明</th>
								</tr>
								<tr>
									<td>
										<a-form-item class="mb-0">
											<a-input v-model:value="formData.title" />
										</a-form-item>
									</td>
									<td>
										<a-form-item class="mb-0">
											<a-input v-model:value="formData.desc" />
										</a-form-item>
									</td>
								</tr>
							</table>
							<template v-for="auth in formData.auths" :key="auth">
								<div class="authTitle mt-4">
									{{ auth.moduleName }}
								</div>
								<table v-if="auth.children.length">
									<tr v-for="child in auth.children" :key="child">
										<th>{{ child.moduleName }}</th>
										<td v-for="item in child.permissionItem" :key="item">
											<a-form-item class="mb-0">
												<a-checkbox v-model:checked="item.checked">
													{{ item.permissionName }}
												</a-checkbox>
											</a-form-item>
										</td>
									</tr>
								</table>
								<table v-else>
									<tr>
										<th>{{ auth.moduleName }}</th>
										<td v-for="item in auth.permissionItem" :key="item">
											<a-form-item class="mb-0">
												<a-checkbox v-model:checked="item.checked">
													{{ item.permissionName }}
												</a-checkbox>
											</a-form-item>
										</td>
									</tr>
								</table>
							</template>
							<div class="mt-4 flex justify-center gap-x-2">
								<BasicButton @click="this.$emit('close')">取消</BasicButton>
								<BasicButton @click="submitForm" type="primary"
									>儲存變更</BasicButton
								>
							</div>
						</a-form>
					</div>
				</template>
			</a-card>
		</OnClickOutside>
	</div>
</template>
