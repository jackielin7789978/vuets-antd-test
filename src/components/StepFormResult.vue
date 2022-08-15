<script setup>
import { SmileFilled } from '@ant-design/icons-vue'
import { Descriptions, DescriptionsItem } from 'ant-design-vue'

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
	<Descriptions title="專案詳細資訊" bordered>
		<DescriptionsItem label="專案名稱">
			{{ result.name }}
		</DescriptionsItem>
		<DescriptionsItem label="專案說明">
			{{ result.description }}
		</DescriptionsItem>
		<DescriptionsItem label="專案目標">
			{{ result.objective }}
		</DescriptionsItem>
		<DescriptionsItem label="負責部門">
			{{ result.department }}
		</DescriptionsItem>
		<DescriptionsItem label="執行期間">
			起：{{ result.duration && result.duration[0] }} <br />
			訖：{{ result.duration && result.duration[1] }}
		</DescriptionsItem>
		<DescriptionsItem label="建立人">
			{{ result.creator }}
		</DescriptionsItem>
		<DescriptionsItem label="審核者">
			{{ result.auditor }}
		</DescriptionsItem>
		<DescriptionsItem label="審核期限">
			{{ result.dueDate }}
		</DescriptionsItem>
	</Descriptions>
</template>
