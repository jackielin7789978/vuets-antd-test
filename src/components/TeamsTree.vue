<script setup>
import { ref, toRaw } from 'vue'
const props = defineProps({
	teamData: {
		type: Array,
	},
})

const treeData = ref(
	Array.from(props.teamData, function iter(x) {
		// 如果沒有子團隊，就返回不包含 children 的物件
		if (!Object.prototype.hasOwnProperty.call(x, 'children')) {
			return {
				title: x.name,
				key: x.id,
			}
		}
		return {
			title: x.name,
			key: x.id,
			children: Array.from(x.children, iter),
		}
	})
)
console.log(toRaw(treeData.value))

const onSelect = (selectedKeys, info) => {
	console.log('selected', selectedKeys, info)
}
</script>

<template>
	<a-tree
		show-line
		:default-expanded-keys="['0']"
		:tree-data="treeData"
		@select="onSelect"
	>
		<template #title="{ dataRef }">
			<template v-if="dataRef.key === '0-0-0-1'">
				<div>multiple line title</div>
				<div>multiple line title</div>
			</template>
			<template v-else>{{ dataRef.title }}</template>
		</template>
	</a-tree>
</template>
