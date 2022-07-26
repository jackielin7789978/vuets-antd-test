<script setup>
import { ref } from 'vue'
const props = defineProps({
	allTeamsData: {
		type: Array,
	},
})
const emit = defineEmits(['selected'])

const treeData = ref(
	Array.from(props.allTeamsData, function iter(x) {
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
)
const onSelect = (selectedKeys, info) => {
	emit('selected', info.node.dataRef.title)
}
</script>

<template>
	<a-tree
		:default-expanded-keys="['0']"
		:tree-data="treeData"
		@select="onSelect"
	>
		<template #title="{ dataRef }">
			{{ dataRef.title }}
		</template>
	</a-tree>
</template>
