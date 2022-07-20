<script setup>
import { SmileFilled } from '@ant-design/icons-vue'
defineProps({
	result: {
		type: Object,
	},
})
</script>
<template>
	<a-result title="成功建立專案">
		<template #icon>
			<SmileFilled />
		</template>
	</a-result>
	<a-descriptions title="專案詳細資訊" bordered>
		<a-descriptions-item label="專案名稱">
			{{ result.name }}
		</a-descriptions-item>
		<a-descriptions-item label="專案說明">
			{{ result.description }}
		</a-descriptions-item>
		<a-descriptions-item label="專案目標">
			{{ result.objective }}
		</a-descriptions-item>
		<a-descriptions-item label="負責部門">
			{{ result.department }}
		</a-descriptions-item>
		<a-descriptions-item label="執行期間">
			起：{{ result.duration && result.duration[0] }} <br />
			訖：{{ result.duration && result.duration[1] }}
		</a-descriptions-item>
		<a-descriptions-item label="建立人">
			{{ result.creator }}
		</a-descriptions-item>
		<a-descriptions-item label="審核者">
			{{ result.auditor }}
		</a-descriptions-item>
		<a-descriptions-item label="審核期限">
			{{ result.dueDate }}
		</a-descriptions-item>
	</a-descriptions>
</template>
