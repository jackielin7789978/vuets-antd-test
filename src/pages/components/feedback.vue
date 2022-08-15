<script setup lang="ts">
import {
	message,
	Modal as AModal,
	Statistic as AStatistic,
	Spin as ASpin,
} from 'ant-design-vue'
import { ref, h } from 'vue'
import {
	InfoCircleOutlined,
	SmileOutlined,
	FrownOutlined,
} from '@ant-design/icons-vue'

const showMsg = (type: string) => {
	switch (type) {
		case 'success':
			message.success('success')
			break
		case 'warning':
			message.warning('warning')
			break
		case 'error':
			message.error('error')
			break
		default:
			message.info('normal info')
	}
}

const showSequenceMsg = () => {
	message.loading('登入中....').then(() => {
		message.success('登入成功！')
	})
}

const showStatefulMsg = () => {
	const key = 'key'
	message.loading({ content: '檔案上傳中...', key })
	setTimeout(() => {
		message.success({ content: '上傳成功！', key, duration: 3 })
	}, 2000)
}

const isModalOpen = ref(false)
const isCenteredModalOpen = ref(false)
const showModal = () => (isModalOpen.value = true)
const showCenteredModal = () => (isCenteredModalOpen.value = true)
const handleOk = () => (isModalOpen.value = false)
const handleCenteredOk = () => (isCenteredModalOpen.value = false)
const showConfirmModal = () => {
	AModal.confirm({
		autoFocusButton: null,
		title: '確定要刪除這筆資料嗎？',
		content: '這項操作無法還原',
		okButtonProps: { danger: true, size: 'large' },
		cancelButtonProps: { size: 'large' },
	})
}
const showInfoModal = () => {
	AModal.info({
		autoFocusButton: null,
		title: '顯示中性資訊',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些資訊一些資訊一些資訊'),
				h('p', '一些資訊一些資訊一些資訊'),
			]),
	})
}
const showErrorModal = () => {
	AModal.error({
		autoFocusButton: null,
		title: '發生錯誤',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些錯誤訊息一些錯誤訊息'),
				h('p', '一些錯誤訊息一些錯誤訊息'),
			]),
		okType: 'danger',
	})
}
const showSuccessModal = () => {
	AModal.success({
		autoFocusButton: null,
		title: '操作成功',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '恭喜您恭喜您恭喜您'),
				h('p', '恭喜您恭喜您恭喜您'),
			]),
		okType: 'default',
	})
}
const showWarningModal = () => {
	AModal.warning({
		autoFocusButton: null,
		title: '注意',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些警告訊息一些警告訊息'),
				h('p', '一些警告訊息一些警告訊息'),
			]),
		okType: 'default',
	})
}

const isCardLoading = ref(false)

const triggerLoading = () => {
	isCardLoading.value = true
	setTimeout(() => {
		isCardLoading.value = false
	}, 2500)
}
</script>

<template>
	<h1 class="text-2xl">Message</h1>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<MButton type="primary" @click="showMsg">顯示普通訊息</MButton>
					<MButton type="primary" color="success" @click="showMsg('success')"
						>顯示成功訊息</MButton
					>
					<MButton type="primary" color="warning" @click="showMsg('warning')"
						>顯示警示訊息</MButton
					>
					<MButton type="primary" danger @click="showMsg('error')"
						>顯示錯誤訊息</MButton
					>
				</div>
			</a-card>
		</a-col>
		<a-col :span="12">
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">改變狀態</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<MButton @click="showSequenceMsg">顯示連續訊息</MButton>
					<MButton @click="showStatefulMsg">改變訊息</MButton>
				</div>
			</a-card>
		</a-col>
	</a-row>

	<a-row class="mt-8" :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Alert</h1>
			<p>維修中...</p>
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<MButton color="success">顯示 Success Alert</MButton>
					<MButton type="primary" ghost>顯示 Info Alert</MButton>
					<MButton color="warning">顯示 Warning Alert</MButton>
					<MButton danger>顯示 Error Alert</MButton>
				</div>
			</a-card>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Modal</h1>
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<MButton @click="showModal">一般 Modal</MButton>
					<AModal
						v-model:visible="isModalOpen"
						@ok="handleOk"
						:okButtonProps="{ size: 'large' }"
						:cancelButtonProps="{ size: 'large' }"
					>
						<template #title>
							<div class="flex items-center gap-x-2">
								<info-circle-outlined class="text-lg relative mt-1" />Basic
								Modal
							</div>
						</template>
						<p>最基本的 Modal</p>
						<p>標題可加 icon、按鈕加大</p>
					</AModal>
					<MButton @click="showCenteredModal">垂直置中 Modal</MButton>
					<AModal
						v-model:visible="isCenteredModalOpen"
						@ok="handleCenteredOk"
						centered
						:okButtonProps="{ size: 'large' }"
						:cancelButtonProps="{ size: 'large' }"
					>
						<template #title>
							<div class="flex items-center gap-x-2">
								<info-circle-outlined class="text-lg relative mt-1" />垂直置中
							</div>
						</template>
						<p>垂直置中的 Modal</p>
						<p>位子可再調整</p>
					</AModal>
					<MButton @click="showConfirmModal" type="primary" danger
						>刪除</MButton
					>
					<MButton @click="showInfoModal" type="primary">資訊</MButton>
					<MButton @click="showErrorModal" type="dashed" danger>錯誤</MButton>
					<MButton @click="showSuccessModal" type="dashed" color="success"
						>成功</MButton
					>
					<MButton @click="showWarningModal" type="dashed" color="warning"
						>警示</MButton
					>
				</div>
			</a-card>
		</a-col>
	</a-row>

	<a-row class="mt-8" :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Result</h1>
			<a-card>
				<MResult title="您已完成所有步驟！">
					<template #icon>
						<SmileOutlined />
					</template>
					<template #extra>
						<MButton type="primary">回首頁</MButton>
					</template>
				</MResult>
			</a-card>
			<a-card>
				<MResult title="抱歉，有東西出錯了...">
					<template #icon>
						<FrownOutlined :style="{ color: '#FF5B52' }" />
					</template>
					<template #extra>
						<MButton key="console" type="primary">回首頁</MButton>
						<MButton key="console">回報錯誤</MButton>
					</template>
				</MResult>
			</a-card>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Progress</h1>
			<a-card>
				<div class="flex flex-col gap-y-13">
					<div class="flex flex-col gap-y-2">
						<MProgress :percent="30" />
						<MProgress :percent="90" :showInfo="false" />
					</div>
					<div class="flex flex-wrap gap-4">
						<MProgress :percent="66" type="circle" :strokeWidth="4" />
						<MProgress :percent="100" type="circle" :strokeWidth="5" />
						<MProgress :percent="88" type="dashboard" :strokeWidth="6" />
					</div>
					<div>
						<MProgress :percent="30" :steps="3" />
						<MProgress :percent="50" :steps="5" />
						<MProgress
							:percent="80"
							:steps="7"
							stroke-color="#FF5B52"
							status="exception"
						/>
						<MProgress :percent="100" :steps="7" stroke-color="#00CDAD" />
					</div>
					<div class="w-1/2">
						<MProgress
							:percent="40"
							status="exception"
							size="small"
							stroke-color="#FF5B52"
						/>
						<MProgress :percent="100" status="success" size="small" />
					</div>
					<div class="flex flex-wrap gap-4">
						<MProgress
							:percent="66"
							type="circle"
							status="exception"
							stroke-color="#FF5B52"
						/>
						<MProgress :percent="100" type="circle" status="normal" />
						<MProgress :percent="100" type="circle" />
					</div>
				</div>
			</a-card>
		</a-col>
	</a-row>
	<h1 class="text-2xl mt-8">Spin & Card Skeleton</h1>
	<MButton @click="triggerLoading" type="primary" class="mt-4 mb-2"
		>開始載入</MButton
	>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<a-card
				:loading="isCardLoading"
				title="活躍使用者"
				:bodyStyle="{ position: 'relative', height: '9rem' }"
			>
				<template #extra>
					<MTag color="#00CDAD">週</MTag>
				</template>
				<AStatistic
					:value="52893"
					:valueStyle="{ margin: '1.5rem 0', fontSize: '2rem' }"
					suffix="人"
				/>
			</a-card>
		</a-col>
		<a-col :span="12">
			<ASpin
				v-if="isCardLoading"
				size="large"
				tip="載入中..."
				class="absolute left-[40%] top-[40%]"
			></ASpin>
			<a-card
				v-else
				title="活躍使用者"
				:bodyStyle="{ position: 'relative', height: '9rem' }"
			>
				<template #extra>
					<MTag color="#00CDAD">週</MTag>
				</template>
				<AStatistic
					:value="52893"
					:valueStyle="{ margin: '1.5rem 0', fontSize: '2rem' }"
					suffix="人"
				/>
			</a-card>
		</a-col>
	</a-row>
</template>

<route lang="json">
{
	"meta": {
		"requiresLogin": true
	}
}
</route>
