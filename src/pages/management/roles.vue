<script setup>
import { ref, onBeforeMount } from 'vue'
import { getAllRoles } from '@/api/roles'
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
} from '@ant-design/icons-vue'
const columns = [
	{
		title: '角色名稱',
		dataIndex: 'title',
	},
	{
		title: '角色說明',
		dataIndex: 'desc',
		width: '40%',
	},
	{
		title: '建立時間',
		dataIndex: 'createdAt',
	},
	{
		title: '操作',
		dataIndex: 'actions',
	},
]

const allRoles = ref([])
onBeforeMount(async () => {
	let res
	try {
		res = await getAllRoles()
		allRoles.value = res
	} catch (err) {
		console.log(err)
	}
})

const openRole = ref()
const isDetailModalOpen = ref(false)
const handleOpenDetailModal = (record) => {
	openRole.value = record.id
	isDetailModalOpen.value = true
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">角色管理</h1>
	<BasicButton type="primary"> <PlusOutlined />新增</BasicButton>
	<a-table :dataSource="allRoles" :columns="columns" class="mt-4">
		<template #bodyCell="{ column, text, record }">
			<div v-if="column.dataIndex === 'actions'" class="flex gap-x-2">
				<BasicButton size="small">
					<EditOutlined />
				</BasicButton>
				<BasicButton size="small" danger>
					<DeleteOutlined />
				</BasicButton>
			</div>
			<div v-else @click="handleOpenDetailModal(record)" class="cursor-pointer">
				{{ text }}
			</div>
		</template>
	</a-table>
	<!-- 檢視角色權限 Modal -->
	<Teleport to="body">
		<RoleDetail
			v-if="isDetailModalOpen"
			@close="isDetailModalOpen = false"
			:roleId="openRole"
		/>
	</Teleport>
</template>
