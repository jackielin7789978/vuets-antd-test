<template>
	<h1 class="text-2xl">通用元件 - 按鈕</h1>
	<h3 class="mt-6 mb-3">
		按照 Ant-Design-Vue 打造的按鈕，包含預設樣式及自訂顏色。
	</h3>
	<a-row :gutter="{ sm: 12, md: 14, lg: 14, xl: 16 }">
		<a-col :span="12">
			<a-card title="預設樣式">
				<div class="flex flex-col gap-y-4">
					<p class="text-[16px] leading-6">
						Ant Design Vue 提供五種按鈕類型和四種按鈕屬性。<br />
						類型：primary, default, dashed, text, link <br />
						屬性：danger, disabled, ghost, loading
					</p>
					<div>
						<h3>None</h3>
						<div class="flexbox">
							<MButton type="primary">Primary</MButton>
							<MButton type="default">Default</MButton>
							<MButton type="dashed">Dashed</MButton>
							<MButton type="text">文字按鈕</MButton>
							<MButton type="link">連結按鈕</MButton>
						</div>
					</div>
					<div>
						<h3>Danger</h3>
						<div class="flexbox">
							<MButton type="primary" danger>Primary Danger</MButton>
							<MButton type="default" danger>Default Danger</MButton>
							<MButton type="dashed" danger>Dashed Danger</MButton>
							<MButton type="text" danger>文字按鈕</MButton>
						</div>
					</div>
					<div>
						<h3>Disabled</h3>
						<div class="flexbox">
							<MButton type="primary" disabled>Primary 按鈕</MButton>
							<MButton type="default" disabled>Default 按鈕</MButton>
							<MButton type="dashed" disabled>Dashed 按鈕</MButton>
							<MButton type="text" disabled>文字按鈕</MButton>
							<MButton type="link" disabled>連結按鈕</MButton>
						</div>
					</div>
					<div>
						<h3>Loading</h3>
						<div class="flexbox">
							<MButton type="primary" loading>Primary Loading</MButton>
							<MButton type="default" loading>Default Loading</MButton>
							<MButton type="dashed" loading>Dashed Loading</MButton>
							<MButton type="text" loading>文字 Loading</MButton>
						</div>
					</div>
					<div>
						<h3>Ghost <span class="ml-1">透明背景</span></h3>
						<div class="bg-[#222] px-2 py-3">
							<div class="flexbox">
								<MButton type="primary" ghost>幽靈按鈕</MButton>
								<MButton ghost>幽靈按鈕</MButton>
								<MButton type="dashed" ghost>幽靈按鈕</MButton>
								<MButton ghost disabled>幽靈按鈕</MButton>
								<MButton type="primary" ghost loading>幽靈按鈕</MButton>
							</div>
							<div class="flexbox mt-4">
								<MButton type="primary" ghost danger>幽靈按鈕</MButton>
								<MButton type="dashed" ghost danger>幽靈按鈕</MButton>
								<MButton ghost disabled>幽靈按鈕</MButton>
								<MButton type="primary" ghost loading danger>幽靈按鈕</MButton>
							</div>
						</div>
					</div>
				</div>
			</a-card>
		</a-col>
		<a-col :span="12">
			<a-card title="自訂顏色">
				<p class="text-[16px] leading-6 mb-10">
					根據內部 Design System 的語意顏色，另外加上 Success 及 Warning
					兩種顏色的按鈕。
				</p>

				<div class="flex flex-col gap-y-4">
					<div>
						<h3>Success</h3>
						<div class="flexbox">
							<MButton color="success" type="primary">Primary</MButton>
							<MButton color="success">Default</MButton>
							<MButton color="success" type="dashed">Dashed</MButton>
							<MButton color="success" loading>Default Loading</MButton>
							<MButton color="success" type="primary" loading
								>Primary Loading</MButton
							>
							<MButton type="text" color="success">Text Button</MButton>
							<MButton color="success" disabled>Disabled</MButton>
						</div>
					</div>
					<div>
						<h3>Warning</h3>
						<div class="flexbox">
							<MButton color="warning" type="primary">Primary</MButton>
							<MButton color="warning">Default</MButton>
							<MButton color="warning" type="dashed">Dashed</MButton>
							<MButton color="warning" loading>Default Loading</MButton>
							<MButton color="warning" type="primary" loading
								>Primary Loading</MButton
							>
							<MButton type="text" color="warning">Text Button</MButton>
							<MButton color="warning" disabled>Disabled</MButton>
						</div>
					</div>
					<div>
						<h3>Ghost <span class="ml-1">透明背景</span></h3>
						<div class="bg-[#222] px-2 py-3">
							<div class="flexbox">
								<MButton color="success" ghost>Ghost Primary</MButton>
								<MButton color="success" type="dashed" ghost
									>Ghost Dashed</MButton
								>
								<MButton color="success" disabled ghost>Ghost Disabled</MButton>
								<MButton color="success" loading ghost>Ghost Loading</MButton>
							</div>
							<div class="flexbox mt-4">
								<MButton color="warning" ghost>Ghost Primary</MButton>
								<MButton color="warning" type="dashed" ghost
									>Ghost Dashed</MButton
								>
								<MButton color="warning" disabled ghost>Ghost Disabled</MButton>
								<MButton color="warning" loading ghost>Ghost Loading</MButton>
							</div>
						</div>
					</div>
				</div>
			</a-card>
		</a-col>
	</a-row>
</template>

<style lang="scss" scope>
.flexbox {
	@apply flex flex-wrap gap-x-2 gap-y-4;
}
</style>

<route lang="json">
{
	"meta": {
		"requiresLogin": true
	}
}
</route>
