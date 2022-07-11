<template>
	<h1 class="text-2xl">Buttons</h1>
	<h3 class="mt-7">按照 Ant-Design-Vue 打造的按鈕，包含預設樣式及自訂顏色。</h3>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="14">
			<a-card title="預設樣式">
				<div class="flex flex-col gap-y-8">
					<p class="text-[16px] leading-6">
						Ant Design Vue 提供五種 button type 和四種 button attribute。<br />
						Types: primary, default, dashed, text, link <br />
						Attribute: danger, disabled, ghost, loading
					</p>
					<a-space>
						<h3 class="w-18">None</h3>
						<BasicButton type="primary">Primary 按鈕</BasicButton>
						<BasicButton type="default">Default 按鈕</BasicButton>
						<BasicButton type="dashed">Dashed 按鈕</BasicButton>
						<BasicButton type="text">文字按鈕</BasicButton>
						<BasicButton type="link">連結按鈕</BasicButton>
					</a-space>
					<a-space>
						<h3 class="w-18">Danger</h3>
						<BasicButton type="primary" danger>Primary 按鈕</BasicButton>
						<BasicButton type="default" danger>Default 按鈕</BasicButton>
						<BasicButton type="dashed" danger>Dashed 按鈕</BasicButton>
						<BasicButton type="text" danger>文字按鈕</BasicButton>
						<BasicButton type="link" danger>連結按鈕</BasicButton>
					</a-space>
					<a-space>
						<h3 class="w-18">Disabled</h3>
						<BasicButton type="primary" disabled>Primary 按鈕</BasicButton>
						<BasicButton type="default" disabled>Default 按鈕</BasicButton>
						<BasicButton type="dashed" disabled>Dashed 按鈕</BasicButton>
						<BasicButton type="text" disabled>文字按鈕</BasicButton>
						<BasicButton type="link" disabled>連結按鈕</BasicButton>
					</a-space>
					<a-space>
						<h3 class="w-18">Loading</h3>
						<BasicButton type="primary" loading>Primary 按鈕</BasicButton>
						<BasicButton type="default" loading>Default 按鈕</BasicButton>
						<BasicButton type="dashed" loading>Dashed 按鈕</BasicButton>
						<BasicButton type="text" loading>文字按鈕</BasicButton>
					</a-space>
					<a-space>
						<h3 class="w-18">Ghost</h3>
						<div class="bg-[#222] p-4">
							<a-space>
								<BasicButton type="primary" ghost>幽靈按鈕</BasicButton>
								<BasicButton type="default" ghost>幽靈按鈕</BasicButton>
								<BasicButton type="dashed" ghost>幽靈按鈕</BasicButton>
								<BasicButton type="default" ghost disabled
									>幽靈按鈕</BasicButton
								>
								<BasicButton type="primary" ghost loading>幽靈按鈕</BasicButton>
								<BasicButton type="link" ghost loading
									>幽靈連結按鈕</BasicButton
								>
							</a-space>
						</div>
					</a-space>
				</div>
			</a-card>
		</a-col>
		<a-col :span="10">
			<a-card title="自訂顏色"></a-card>
		</a-col>
	</a-row>
</template>
