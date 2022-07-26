<script setup>
import { ref } from 'vue'
import { PlusOutlined, EditOutlined } from '@ant-design/icons-vue'
import { Modal, message } from 'ant-design-vue'

defineProps({
	detail: {
		type: Object,
	},
})

const isAddTeamModalOpen = ref(false)
const isEditTeamModalOpen = ref(false)
const onDelete = () => {
	Modal.confirm({
		title: '提醒',
		content: '確定要刪除這個團隊嗎？這項操作將無法復原。',
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
	<div>
		<h1 class="text-2xl font-semibold">{{ detail.name }}</h1>
		<div class="flex gap-x-2 mb-4">
			<BasicButton type="primary" @click="isAddTeamModalOpen = true">
				<PlusOutlined />新增子團隊
			</BasicButton>
			<!-- 多加一個 v-if 判斷，讓 Modal 開啟時才 mount 元件 -->
			<TeamsAddModal
				v-if="isAddTeamModalOpen"
				v-model:visible="isAddTeamModalOpen"
				@close-modal="isAddTeamModalOpen = false"
			/>
			<BasicButton
				color="warning"
				type="primary"
				@click="isEditTeamModalOpen = true"
			>
				<EditOutlined />編輯團隊
			</BasicButton>
			<!-- 多加一個 v-if 判斷，讓 Modal 開啟時才 mount 元件 -->
			<TeamsEditModal
				v-if="isEditTeamModalOpen"
				v-model:visible="isEditTeamModalOpen"
				@close-modal="isEditTeamModalOpen = false"
				:detail="detail"
			/>
			<BasicButton danger type="primary" @click="onDelete">
				<EditOutlined />刪除團隊
			</BasicButton>
		</div>
		<a-descriptions
			class="bg-white"
			bordered
			:column="1"
			:labelStyle="{ width: '16%', minWidth: '120px' }"
		>
			<a-descriptions-item label="團隊名稱">
				{{ detail.name }}
			</a-descriptions-item>
			<a-descriptions-item label="子團隊">
				<div v-if="detail.children">
					<div v-for="childTeam in detail.children" :key="childTeam.id">
						{{ childTeam.name }}
					</div>
				</div>
				<span v-else>無</span>
			</a-descriptions-item>
			<a-descriptions-item label="成員">
				<div v-if="detail.members">
					<div v-for="member in detail.members" :key="member">
						{{ member }}
					</div>
				</div>
				<span v-else>無</span>
			</a-descriptions-item>
		</a-descriptions>
	</div>
</template>
