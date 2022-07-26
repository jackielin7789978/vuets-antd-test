<script setup>
import { getAllTeams } from '@/api/teams'
import { ref, onBeforeMount } from 'vue'
import { findNode, findAndModifyNode } from '@/utils'

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
	const result = findNode(allTeamsData.value, 'name', teamName)
	teamDetail.value = result
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
			<TeamsDetail :detail="teamDetail" />
		</a-col>
	</a-row>
</template>
