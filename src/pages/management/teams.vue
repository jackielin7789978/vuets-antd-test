<script setup>
import { getAllTeams } from '@/api/teams'
import { ref, onBeforeMount } from 'vue'
import { findNode } from '@/utils'
import { PlusOutlined, EditOutlined } from '@ant-design/icons-vue'

const allTeamsData = ref([])
const teamDetail = ref({})
onBeforeMount(async () => {
	try {
		allTeamsData.value = await getAllTeams()
		teamDetail.value = allTeamsData.value[0]
	} catch (err) {
		console.log(err)
	}
})

const onSelected = (teamName) => {
	teamDetail.value = findNode(allTeamsData.value, 'name', teamName)
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-8">團隊管理</h1>
	<a-row :gutter="24">
		<a-col :xs="24" :md="6">
			<div v-if="allTeamsData.length">
				<TeamsTree
					@selected="onSelected"
					class="p-4 rounded"
					:allTeamsData="allTeamsData"
				/>
			</div>
			<span v-else>Loading...</span>
		</a-col>
		<a-col :xs="24" :md="18" class="mt-4 md:mt-0">
			<div class="flex gap-x-2">
				<BasicButton type="primary" @click="isAddUserModalOpen = true">
					<PlusOutlined />新增子群組
				</BasicButton>
				<BasicButton
					color="warning"
					type="primary"
					@click="isAddUserModalOpen = true"
				>
					<EditOutlined />編輯群組
				</BasicButton>
				<BasicButton danger type="primary" @click="isAddUserModalOpen = true">
					<EditOutlined />刪除群組
				</BasicButton>
			</div>

			<TeamsDetail :detail="teamDetail" class="mt-4" />
		</a-col>
	</a-row>
</template>
