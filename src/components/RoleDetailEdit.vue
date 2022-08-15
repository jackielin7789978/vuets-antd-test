<script setup>
import { onBeforeMount, ref, reactive, toRaw } from 'vue'
import { Skeleton, Form, FormItem, Input, Checkbox } from 'ant-design-vue'
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
				<Skeleton
					v-if="isLoading"
					active
					size="large"
					:paragraph="{ rows: 8 }"
				/>
				<template v-else>
					<h1 v-if="errMessage" class="errMsg">{{ errMessage }}</h1>
					<div v-else>
						<Form :model="formData">
							<table class="mb-8">
								<tr>
									<th :style="{ width: '10%' }">角色名稱</th>
									<th>角色說明</th>
								</tr>
								<tr>
									<td>
										<FormItem class="mb-0">
											<Input v-model:value="formData.title" />
										</FormItem>
									</td>
									<td>
										<FormItem class="mb-0">
											<Input v-model:value="formData.desc" />
										</FormItem>
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
											<FormItem class="mb-0">
												<Checkbox v-model:checked="item.checked">
													{{ item.permissionName }}
												</Checkbox>
											</FormItem>
										</td>
									</tr>
								</table>
								<table v-else>
									<tr>
										<th>{{ auth.moduleName }}</th>
										<td v-for="item in auth.permissionItem" :key="item">
											<FormItem class="mb-0">
												<Checkbox v-model:checked="item.checked">
													{{ item.permissionName }}
												</Checkbox>
											</FormItem>
										</td>
									</tr>
								</table>
							</template>
							<div class="mt-4 flex justify-center gap-x-2">
								<MButton @click="this.$emit('close')">取消</MButton>
								<MButton @click="submitForm" type="primary">儲存變更</MButton>
							</div>
						</Form>
					</div>
				</template>
			</a-card>
		</OnClickOutside>
	</div>
</template>

<style lang="scss" scoped>
.mask {
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 45%);
}
.detailModal {
	min-width: 600px;
	min-height: 450px;
	width: 50%;
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.label {
	background: #000;
	color: white;
	padding: 1rem;
}

.errMsg {
	color: $error-color;
}

.authTitle {
	font-size: 1.1rem;
	font-weight: 600;
	background-color: #888b92;
	padding: 0.3rem 1rem;
	color: white;
	text-align: center;
}
table {
	width: 100%;
}
th,
td {
	padding: 0.5rem 1rem;
	text-align: left;
}
th {
	background-color: #e4e5e6;
	min-width: 120px;
	width: 25%;
}
</style>
