<script setup>
import { getAllTeams } from '@/api/teams'
import { ref, onBeforeMount, toRaw } from 'vue'

const teamData = ref([])
onBeforeMount(async () => {
	try {
		teamData.value = await getAllTeams()
	} catch (err) {
		console.log(err)
	}
})
</script>

<template>
	<h1 class="text-xl font-semibold mb-8">團隊管理</h1>
	<a-row :gutter="16">
		<a-col :span="6">
			<div v-if="teamData.length">
				<TeamsTree class="p-4 rounded" :teamData="toRaw(teamData)" />
			</div>
			<span v-else>Loading...</span>
		</a-col>
		<a-col :span="18"> team details </a-col>
	</a-row>
</template>
