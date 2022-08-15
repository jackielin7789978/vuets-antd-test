<script setup>
import { Descriptions, DescriptionsItem } from 'ant-design-vue'

defineProps({
	detail: {
		type: Object,
	},
})
</script>

<template>
	<Descriptions
		class="bg-white"
		bordered
		:column="1"
		:labelStyle="{ width: '16%', minWidth: '120px' }"
	>
		<DescriptionsItem label="團隊名稱">
			{{ detail.name }}
		</DescriptionsItem>
		<DescriptionsItem label="子團隊">
			<div v-if="detail.children.length">
				<div v-for="childTeam in detail.children" :key="childTeam.id">
					{{ childTeam.name }}
				</div>
			</div>
			<span v-else>無</span>
		</DescriptionsItem>
		<DescriptionsItem label="成員">
			<div v-if="detail.members">
				<div v-for="member in detail.members" :key="member">
					{{ member }}
				</div>
			</div>
			<span v-else>無</span>
		</DescriptionsItem>
	</Descriptions>
</template>
