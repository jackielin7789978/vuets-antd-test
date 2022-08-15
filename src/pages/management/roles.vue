<script setup>
import { ref, onBeforeMount } from 'vue'
import { Table } from 'ant-design-vue'
import { getAllRoles } from '@/api/roles'
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
} from '@ant-design/icons-vue'
import { Modal, message } from 'ant-design-vue'

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
const isEditModalOpen = ref(false)
const isAddModalOpen = ref(false)
const handleOpenModal = (target, record) => {
	openRole.value = record.id
	switch (target) {
		case 'view':
			isDetailModalOpen.value = true
			break
		case 'edit':
			isEditModalOpen.value = true
			break
		case 'add':
			isAddModalOpen.value = true
	}
}

// 模擬刪除
const handleDeleteRole = () => {
	Modal.confirm({
		title: '提醒',
		content: '確定要刪除這個角色嗎？這項操作將無法復原。',
		okText: '刪除',
		cancelText: '取消',
		okButtonProps: { danger: true },
		cancelButtonProps: { danger: true },
		onOk: () => {
			message.success('刪除成功！')
		},
	})
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">角色管理</h1>
	<MButton @click="isAddModalOpen = true" type="primary">
		<PlusOutlined />新增</MButton
	>
	<Table :dataSource="allRoles" :columns="columns" class="mt-4">
		<template #bodyCell="{ column, text, record }">
			<div v-if="column.dataIndex === 'actions'" class="flex gap-x-2">
				<MButton @click="handleOpenModal('edit', record)" size="small">
					<EditOutlined />
				</MButton>
				<MButton @click="handleDeleteRole" size="small" danger>
					<DeleteOutlined />
				</MButton>
			</div>
			<div
				v-else
				@click="handleOpenModal('view', record)"
				class="cursor-pointer"
			>
				{{ text }}
			</div>
		</template>
	</Table>
	<!-- 檢視角色權限 Modal -->
	<Teleport to="body">
		<RoleDetail
			v-if="isDetailModalOpen"
			@close="isDetailModalOpen = false"
			:roleId="openRole"
		/>
	</Teleport>
	<!-- 編輯角色權限 Modal -->
	<Teleport to="body">
		<RoleDetailEdit
			v-if="isEditModalOpen"
			@close="isEditModalOpen = false"
			:roleId="openRole"
		/>
	</Teleport>
	<!-- 新增角色 Modal -->
	<Teleport to="body">
		<RoleDetailAdd
			v-if="isAddModalOpen"
			@close="isAddModalOpen = false"
			:roleId="openRole"
		/>
	</Teleport>
</template>
