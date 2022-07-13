<script setup>
import { ref } from 'vue'

const showGreetModal = ref(false)
</script>

<template>
	<div class="text-right">
		<BasicButton @click="showGreetModal = true" color="success" type="primary"
			>Greet Me</BasicButton
		>
		<Teleport to="body">
			<GreetModal v-if="showGreetModal" @close-modal="showGreetModal = false" />
		</Teleport>
	</div>
	<a-space direction="vertical" class="w-full" size="large">
		<a-row :gutter="16">
			<a-col :span="6">
				<a-card :bordered="false" title="活躍使用者">
					<template #extra>
						<a-tag color="#00CDAD">週</a-tag>
					</template>
					<a-statistic :value="52893" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card :bordered="false" title="活躍使用者">
					<template #extra>
						<a-tag color="#FF8737">月</a-tag>
					</template>
					<a-statistic :value="82893" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card :bordered="false" title="活躍使用者">
					<template #extra>
						<a-tag color="#FF5B52">季</a-tag>
					</template>
					<a-statistic :value="102893" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card :bordered="false" title="活躍使用者">
					<template #extra>
						<a-tag color="#0FC4CA">年</a-tag>
					</template>
					<a-statistic :value="112893" />
				</a-card>
			</a-col>
		</a-row>

		<a-row>
			<a-col :span="24">
				<a-card>
					<a-tabs>
						<a-tab-pane key="1" tab="使用者">
							<EmptyData description="無使用者"></EmptyData>
						</a-tab-pane>
						<a-tab-pane key="2" tab="新使用者人數">
							<EmptyData description="無新使用者"></EmptyData>
						</a-tab-pane>
						<a-tab-pane key="3" tab="平均參與時間">
							<EmptyData description="無資料"></EmptyData>
						</a-tab-pane>
					</a-tabs>
				</a-card>
			</a-col>
		</a-row>
	</a-space>
</template>
