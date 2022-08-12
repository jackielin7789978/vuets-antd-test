<script setup lang="ts">
import { onBeforeMount, ref, withDefaults } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { getRole } from '@/api/roles'

const emit = defineEmits(['close'])
const props = withDefaults(defineProps<{ roleId: number }>(), {
	roleId: 0,
})

const roleData: any = ref({})
const errMessage = ref('')
const isLoading = ref(false)
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
		console.log(res)
	} catch (err: any) {
		console.log(err)
		errMessage.value = err
	} finally {
		isLoading.value = false
	}
})
</script>

<template>
	<div class="mask">
		<OnClickOutside @trigger="emit('close')">
			<a-card class="detailModal">
				<template #title>
					<div class="text-xl font-semibold text-center">檢視角色</div>
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
						<table class="mb-8">
							<tr>
								<th :style="{ width: '10%' }">角色名稱</th>
								<th>角色說明</th>
							</tr>
							<tr>
								<td>{{ roleData.title }}</td>
								<td>{{ roleData.desc }}</td>
							</tr>
						</table>
						<template v-for="auth in roleData.auths" :key="auth">
							<div class="authTitle mt-4">
								{{ auth.moduleName }}
							</div>
							<table v-if="auth.children.length">
								<tr v-for="child in auth.children" :key="child">
									<th>{{ child.moduleName }}</th>
									<td v-for="item in child.permissionItem" :key="item">
										<span>
											<a-checkbox
												v-model:checked="item.checked"
												disabled
											></a-checkbox>
											{{ item.permissionName }}
										</span>
									</td>
								</tr>
							</table>
							<table v-else>
								<tr>
									<th>{{ auth.moduleName }}</th>
									<td v-for="item in auth.permissionItem" :key="item">
										<span>
											<a-checkbox
												v-model:checked="item.checked"
												disabled
											></a-checkbox>
											{{ item.permissionName }}
										</span>
									</td>
								</tr>
							</table>
						</template>
					</div>
				</template>
			</a-card>
		</OnClickOutside>
	</div>
</template>

<style lang="scss">
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
