<template>
	<h1 class="text-2xl">Buttons</h1>
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
							<BasicButton type="primary">Primary</BasicButton>
							<BasicButton type="default">Default</BasicButton>
							<BasicButton type="dashed">Dashed</BasicButton>
							<BasicButton type="text">文字按鈕</BasicButton>
							<BasicButton type="link">連結按鈕</BasicButton>
						</div>
					</div>
					<div>
						<h3>Danger</h3>
						<div class="flexbox">
							<BasicButton type="primary" danger>Primary Danger</BasicButton>
							<BasicButton type="default" danger>Default Danger</BasicButton>
							<BasicButton type="dashed" danger>Dashed Danger</BasicButton>
							<BasicButton type="text" danger>文字按鈕</BasicButton>
						</div>
					</div>
					<div>
						<h3>Disabled</h3>
						<div class="flexbox">
							<BasicButton type="primary" disabled>Primary 按鈕</BasicButton>
							<BasicButton type="default" disabled>Default 按鈕</BasicButton>
							<BasicButton type="dashed" disabled>Dashed 按鈕</BasicButton>
							<BasicButton type="text" disabled>文字按鈕</BasicButton>
							<BasicButton type="link" disabled>連結按鈕</BasicButton>
						</div>
					</div>
					<div>
						<h3>Loading</h3>
						<div class="flexbox">
							<BasicButton type="primary" loading>Primary Loading</BasicButton>
							<BasicButton type="default" loading>Default Loading</BasicButton>
							<BasicButton type="dashed" loading>Dashed Loading</BasicButton>
							<BasicButton type="text" loading>文字 Loading</BasicButton>
						</div>
					</div>
					<div>
						<h3>Ghost <span class="ml-1">透明背景</span></h3>
						<div class="bg-[#222] px-2 py-3">
							<div class="flexbox">
								<BasicButton type="primary" ghost>幽靈按鈕</BasicButton>
								<BasicButton ghost>幽靈按鈕</BasicButton>
								<BasicButton type="dashed" ghost>幽靈按鈕</BasicButton>
								<BasicButton ghost disabled>幽靈按鈕</BasicButton>
								<BasicButton type="primary" ghost loading>幽靈按鈕</BasicButton>
							</div>
							<div class="flexbox mt-4">
								<BasicButton type="primary" ghost danger>幽靈按鈕</BasicButton>
								<BasicButton type="dashed" ghost danger>幽靈按鈕</BasicButton>
								<BasicButton ghost disabled>幽靈按鈕</BasicButton>
								<BasicButton type="primary" ghost loading danger
									>幽靈按鈕</BasicButton
								>
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
							<BasicButton color="success" type="primary">Primary</BasicButton>
							<BasicButton color="success">Default</BasicButton>
							<BasicButton color="success" type="dashed">Dashed</BasicButton>
							<BasicButton color="success" loading>Default Loading</BasicButton>
							<BasicButton color="success" type="primary" loading
								>Primary Loading</BasicButton
							>
							<BasicButton type="text" color="success">Text Button</BasicButton>
							<BasicButton color="success" disabled>Disabled</BasicButton>
						</div>
					</div>
					<div>
						<h3>Warning</h3>
						<div class="flexbox">
							<BasicButton color="warning" type="primary">Primary</BasicButton>
							<BasicButton color="warning">Default</BasicButton>
							<BasicButton color="warning" type="dashed">Dashed</BasicButton>
							<BasicButton color="warning" loading>Default Loading</BasicButton>
							<BasicButton color="warning" type="primary" loading
								>Primary Loading</BasicButton
							>
							<BasicButton type="text" color="warning">Text Button</BasicButton>
							<BasicButton color="warning" disabled>Disabled</BasicButton>
						</div>
					</div>
					<div>
						<h3>Ghost <span class="ml-1">透明背景</span></h3>
						<div class="bg-[#222] px-2 py-3">
							<div class="flexbox">
								<BasicButton color="success" ghost>Ghost Primary</BasicButton>
								<BasicButton color="success" type="dashed" ghost
									>Ghost Dashed</BasicButton
								>
								<BasicButton color="success" disabled ghost
									>Ghost Disabled</BasicButton
								>
								<BasicButton color="success" loading ghost
									>Ghost Loading</BasicButton
								>
							</div>
							<div class="flexbox mt-4">
								<BasicButton color="warning" ghost>Ghost Primary</BasicButton>
								<BasicButton color="warning" type="dashed" ghost
									>Ghost Dashed</BasicButton
								>
								<BasicButton color="warning" disabled ghost
									>Ghost Disabled</BasicButton
								>
								<BasicButton color="warning" loading ghost
									>Ghost Loading</BasicButton
								>
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
