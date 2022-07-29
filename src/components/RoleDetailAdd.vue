<script setup>
import { onBeforeMount, ref, reactive, toRaw } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { editRole } from '@/api/roles'
import { message } from 'ant-design-vue'

const errMessage = ref('')
const isLoading = ref(false)
const formData = reactive({
	id: 100,
	title: '',
	createdAt: '@datetime',
	desc: '',
	auths: [
		{
			moduleId: 1,
			moduleName: '權限管理',
			children: [
				{
					moduleId: 2,
					moduleName: '團隊管理',
					children: [],
					permissionItem: [
						{
							permissionName: '查看',
							permissionKey: 'R',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '新增',
							permissionKey: 'C',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '修改',
							permissionKey: 'U',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '刪除',
							permissionKey: 'D',
							checked: false,
							disabled: false,
						},
					],
				},
				{
					moduleId: 3,
					moduleName: '角色管理',
					children: [],
					permissionItem: [
						{
							permissionName: '查看',
							permissionKey: 'R',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '新增',
							permissionKey: 'C',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '修改',
							permissionKey: 'U',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '刪除',
							permissionKey: 'D',
							checked: false,
							disabled: false,
						},
					],
				},
				{
					moduleId: 4,
					moduleName: '使用者管理',
					children: [],
					permissionItem: [
						{
							permissionName: '查看',
							permissionKey: 'R',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '新增',
							permissionKey: 'C',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '修改',
							permissionKey: 'U',
							checked: false,
							disabled: false,
						},
						{
							permissionName: '刪除',
							permissionKey: 'D',
							checked: false,
							disabled: false,
						},
					],
				},
			],
			permissionItem: [
				{
					permissionName: '查看',
					permissionKey: 'R',
					checked: false,
					disabled: false,
				},
			],
		},
		{
			moduleId: 2,
			moduleName: '待辦事項',
			children: [],
			permissionItem: [
				{
					permissionName: '查看',
					permissionKey: 'R',
					checked: false,
					disabled: false,
				},
				{
					permissionName: '新增',
					permissionKey: 'C',
					checked: false,
					disabled: false,
				},
				{
					permissionName: '修改',
					permissionKey: 'U',
					checked: false,
					disabled: false,
				},
				{
					permissionName: '刪除',
					permissionKey: 'D',
					checked: false,
					disabled: false,
				},
			],
		},
	],
})

const submitForm = async () => {}
</script>

<template>
	<div class="mask">
		<OnClickOutside @trigger="this.$emit('close')">
			<a-card class="detailModal">
				<template #title>
					<div class="text-xl font-semibold text-center">新增角色</div>
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
									>新增</BasicButton
								>
							</div>
						</a-form>
					</div>
				</template>
			</a-card>
		</OnClickOutside>
	</div>
</template>
