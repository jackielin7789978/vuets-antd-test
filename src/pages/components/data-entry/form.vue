<template>
	<h1 class="text-2xl font-semibold mb-8">表單</h1>
	<a-row class="mb-6" :gutter="12">
		<a-col :sm="{ span: 24 }" :lg="{ span: 11 }">
			<h1 class="text-lg font-semibold">登入</h1>
			<a-card>
				<DemoFormLogin />
			</a-card>
		</a-col>
		<a-col :sm="{ span: 24 }" :lg="{ span: 13 }" class="mt-4 lg:mt-0">
			<h1 class="text-lg font-semibold">編輯個人資料</h1>
			<a-card>
				<DemoFormPersonal />
			</a-card>
		</a-col>
	</a-row>
</template>

<style lang="scss">
// 移除 checkbox 的光暈特效
@keyframes antCheckboxEffect {
	0% {
		transform: scale(1);
		opacity: 0;
	}

	100% {
		transform: scale(1.6);
		opacity: 0;
	}
}
@keyframes antRadioEffect {
	0% {
		transform: scale(1);
		opacity: 0;
	}

	100% {
		transform: scale(1.6);
		opacity: 0;
	}
}

.ant-form-item-explain-error {
	color: #ff5b52;
	// font-size: 13px;
}
</style>
