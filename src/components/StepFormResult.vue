<script setup lang="ts">
import { SmileFilled } from '@ant-design/icons-vue'
import MResult from './MResult.vue'
import { Descriptions as ADescriptions } from 'ant-design-vue'
const ADescriptionsItem = ADescriptions.Item

defineProps({
	result: {
		type: Object,
	},
})
</script>
<template>
	<MResult title="成功建立專案">
		<template #icon>
			<SmileFilled />
		</template>
	</MResult>
	<ADescriptions title="專案詳細資訊" bordered>
		<ADescriptionsItem label="專案名稱">
			{{ result.name }}
		</ADescriptionsItem>
		<ADescriptionsItem label="專案說明">
			{{ result.description }}
		</ADescriptionsItem>
		<ADescriptionsItem label="專案目標">
			{{ result.objective }}
		</ADescriptionsItem>
		<ADescriptionsItem label="負責部門">
			{{ result.department }}
		</ADescriptionsItem>
		<ADescriptionsItem label="執行期間">
			起：{{ result.duration && result.duration[0] }} <br />
			訖：{{ result.duration && result.duration[1] }}
		</ADescriptionsItem>
		<ADescriptionsItem label="建立人">
			{{ result.creator }}
		</ADescriptionsItem>
		<ADescriptionsItem label="審核者">
			{{ result.auditor }}
		</ADescriptionsItem>
		<ADescriptionsItem label="審核期限">
			{{ result.dueDate }}
		</ADescriptionsItem>
	</ADescriptions>
</template>
