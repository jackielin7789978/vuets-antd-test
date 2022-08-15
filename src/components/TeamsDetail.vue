<script setup lang="ts">
import { Descriptions as ADescriptions } from 'ant-design-vue'
const ADescriptionsItem = ADescriptions.Item

defineProps({
	detail: {
		type: Object,
	},
})
</script>

<template>
	<ADescriptions
		class="bg-white"
		bordered
		:column="1"
		:labelStyle="{ width: '16%', minWidth: '120px' }"
	>
		<ADescriptionsItem label="團隊名稱">
			{{ detail.name }}
		</ADescriptionsItem>
		<ADescriptionsItem label="子團隊">
			<div v-if="detail.children.length">
				<div v-for="childTeam in detail.children" :key="childTeam.id">
					{{ childTeam.name }}
				</div>
			</div>
			<span v-else>無</span>
		</ADescriptionsItem>
		<ADescriptionsItem label="成員">
			<div v-if="detail.members">
				<div v-for="member in detail.members" :key="member">
					{{ member }}
				</div>
			</div>
			<span v-else>無</span>
		</ADescriptionsItem>
	</ADescriptions>
</template>
