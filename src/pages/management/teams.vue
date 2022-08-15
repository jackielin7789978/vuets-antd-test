<script setup lang="ts">
import { getAllTeams } from '@/api/teams'
import { ref, computed, watch, onBeforeMount, toRaw, onUpdated } from 'vue'
import { findNode, findAndModifyNode } from '@/utils'
import {
	PlusCircleOutlined,
	EditOutlined,
	DeleteOutlined,
} from '@ant-design/icons-vue'
import {
	Modal as AModal,
	message,
	Tree as ATree,
	Spin as ASpin,
} from 'ant-design-vue'
import { deleteTeam } from '@/api/teams'

const allTeamsData = ref([])
const treeData = computed(() => {
	return Array.from(allTeamsData.value, function iter(x) {
		// 如果沒有子團隊，就返回不包含 children 的物件
		if (!Object.prototype.hasOwnProperty.call(x, 'children')) {
			return {
				title: x.name,
				key: x.key,
			}
		}
		return {
			title: x.name,
			key: x.key,
			children: Array.from(x.children, iter),
		}
	})
})
const treeSelectedKeys = ref(['0'])
const treeExpandedKeys = ref(['0'])
const targetKey = ref('0')

watch(treeSelectedKeys, () => {
	if (treeSelectedKeys.value.length) {
		targetKey.value = treeSelectedKeys.value[0]
	}
})
const teamDetail = computed(() => {
	return findNode(allTeamsData.value, 'key', targetKey.value)
})

// 抓取所有團隊、預設選取母團隊
onBeforeMount(async () => {
	try {
		allTeamsData.value = await getAllTeams()
		treeSelectedKeys.value.push = '0'
	} catch (err) {
		console.log(err)
	}
})

// CRUD
const isAddTeamModalOpen = ref(false)
const isEditTeamModalOpen = ref(false)

// 模擬新增
const handleAddTeam = (newTeamData) => {
	isAddTeamModalOpen.value = false
	findAndModifyNode(
		allTeamsData.value,
		'key',
		teamDetail.value.key,
		(target) => {
			const newKey = `${teamDetail.value.key}${
				teamDetail.value.children.length + 1
			}`
			target.children.push({
				id: 100,
				key: newKey,
				children: [],
				...newTeamData,
			})

			treeExpandedKeys.value.push(teamDetail.value.key)
			treeSelectedKeys.value = [newKey]
		}
	)
}

// 模擬編輯
const handleEditTeam = (updatedTeam) => {
	if (!updatedTeam) return (isEditTeamModalOpen.value = false)
	isEditTeamModalOpen.value = false
	findAndModifyNode(
		allTeamsData.value,
		'key',
		teamDetail.value.key,
		(target) => {
			const { id, key, children } = target
			Object.assign(target, {
				id,
				key,
				children,
				...updatedTeam,
			})
		}
	)
}

// 模擬刪除
const handleDeleteTeam = () => {
	AModal.confirm({
		title: '提醒',
		content: '確定要刪除這個團隊嗎？這項操作將無法復原。',
		okText: '刪除',
		cancelText: '取消',
		okButtonProps: { danger: true },
		cancelButtonProps: { danger: true },
		onOk: async () => {
			let result
			try {
				result = await deleteTeam(teamDetail.value.id)
				if (!result.ok) throw result.message

				message.success('刪除成功！')
			} catch (err) {
				console.log(err)
			}
		},
	})
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">團隊管理</h1>
	<a-row :gutter="24">
		<!-- 樹狀列表 -->
		<a-col :xs="24" :md="6">
			<div v-if="allTeamsData.length">
				<ATree
					v-model:selectedKeys="treeSelectedKeys"
					v-model:expandedKeys="treeExpandedKeys"
					:tree-data="treeData"
					class="px-2 py-4"
				>
					<template #title="{ dataRef }">
						{{ dataRef.title }}
					</template>
				</ATree>
			</div>
			<a-spin v-else />
		</a-col>

		<a-col v-if="teamDetail" :xs="24" :md="18" class="mt-4 md:mt-0">
			<h1 class="text-2xl font-semibold">{{ teamDetail.name }}</h1>

			<!-- CRUD 按鈕 -->
			<div class="flex gap-x-2 mb-4">
				<MButton type="primary" @click="isAddTeamModalOpen = true">
					<PlusCircleOutlined />新增子團隊</MButton
				>

				<!-- 多加一個 v-if 判斷，讓 Modal 開啟時才 mount 元件 -->
				<TeamsAddModal
					v-if="isAddTeamModalOpen"
					v-model:visible="isAddTeamModalOpen"
					@close-modal="handleAddTeam"
				/>
				<MButton
					color="warning"
					type="primary"
					@click="isEditTeamModalOpen = true"
				>
					<EditOutlined />編輯團隊
				</MButton>
				<!-- 多加一個 v-if 判斷，讓 Modal 開啟時才 mount 元件 -->
				<TeamsEditModal
					v-if="isEditTeamModalOpen"
					v-model:visible="isEditTeamModalOpen"
					@close-modal="handleEditTeam"
					:detail="teamDetail"
				/>
				<MButton danger type="primary" @click="handleDeleteTeam">
					<DeleteOutlined />刪除團隊
				</MButton>
			</div>

			<!-- 團隊詳情 -->
			<TeamsDetail :detail="teamDetail" />
		</a-col>
		<ASpin v-else />
	</a-row>
</template>
