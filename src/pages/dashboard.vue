<script setup>
import { ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import yapi from '@/api/yapi'

const showGreetModal = ref(false)
const isLoadingDashboardData = ref(true)
const dashboardData = ref({})

yapi
	.get('/dashboard')
	.then((res) => {
		if (res.status === 200) {
			return res.data
		}
	})
	.then((data) => {
		dashboardData.value = data
		isLoadingDashboardData.value = false
	})
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
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="總會員數"
				>
					<template #extra>
						<UserOutlined :style="{ fontSize: '18px' }" />
					</template>
					<a-statistic :value="dashboardData.totalMember" suffix="人" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="新增會員"
				>
					<template #extra>
						<a-tag color="#FF8737">月</a-tag>
					</template>
					<a-statistic :value="dashboardData.monthlyNewMember" suffix="人" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="訂單數量"
				>
					<template #extra>
						<a-tag color="#FF5B52">月</a-tag>
					</template>
					<a-statistic :value="dashboardData.monthlyOrders" suffix="筆" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="營業額"
				>
					<template #extra>
						<a-tag color="#0FC4CA">月</a-tag>
					</template>
					<a-statistic :value="dashboardData.monthlyRevenue" suffix="元" />
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

<route lang="json">
{
	"meta": {
		"requiresLogin": true
	}
}
</route>
