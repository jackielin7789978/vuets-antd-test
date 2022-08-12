<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { Statistic as AStatistic, Tabs as ATabs } from 'ant-design-vue'
import yapi from '@/api/yapi'
const ATabPane = ATabs.TabPane

interface DashboardData {
	totalMember: number
	monthlyNewMember: number
	monthlyOrders: number
	monthlyRevenue: number
}

const showGreetModal = ref(false)
const isLoadingDashboardData = ref(true)
const dashboardData: DashboardData = reactive({
	totalMember: 0,
	monthlyNewMember: 0,
	monthlyOrders: 0,
	monthlyRevenue: 0,
})

yapi
	.get('/dashboard')
	.then((res) => {
		if (res.status === 200) {
			return res.data
		}
	})
	.then((data) => {
		Object.assign(dashboardData, data)
		isLoadingDashboardData.value = false
	})
</script>

<template>
	<div class="text-right">
		<MButton @click="showGreetModal = true" color="success" type="primary"
			>Greet Me</MButton
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
					<AStatistic :value="dashboardData.totalMember" suffix="人" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="新增會員"
				>
					<template #extra>
						<MTag color="#FF8737">月</MTag>
					</template>
					<AStatistic :value="dashboardData.monthlyNewMember" suffix="人" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="訂單數量"
				>
					<template #extra>
						<MTag color="#FF5B52">月</MTag>
					</template>
					<AStatistic :value="dashboardData.monthlyOrders" suffix="筆" />
				</a-card>
			</a-col>
			<a-col :span="6">
				<a-card
					:loading="isLoadingDashboardData"
					:bordered="false"
					title="營業額"
				>
					<template #extra>
						<MTag color="#0FC4CA">月</MTag>
					</template>
					<AStatistic :value="dashboardData.monthlyRevenue" suffix="元" />
				</a-card>
			</a-col>
		</a-row>

		<a-row>
			<a-col :span="24">
				<a-card>
					<ATabs>
						<ATabPane key="1" tab="使用者">
							<MEmpty description="無使用者"></MEmpty>
						</ATabPane>
						<ATabPane key="2" tab="新使用者人數">
							<MEmpty description="無新使用者"></MEmpty>
						</ATabPane>
						<ATabPane key="3" tab="平均參與時間">
							<MEmpty description="無資料"></MEmpty>
						</ATabPane>
					</ATabs>
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
