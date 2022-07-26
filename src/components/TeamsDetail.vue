<script setup>
defineProps({
	detail: {
		type: Object,
	},
})
</script>

<template>
	<a-descriptions
		class="bg-white"
		bordered
		:column="1"
		:labelStyle="{ width: '20%', minWidth: '120px' }"
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
				<div v-for="member in detail.members" :key="member.id">
					{{ member.name }} ({{ member.id }})
				</div>
			</div>
			<span v-else>無</span>
		</a-descriptions-item>
	</a-descriptions>
</template>
