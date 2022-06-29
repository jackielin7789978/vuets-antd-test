<template>
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
              <a-empty class="empty">
                <template #description>
                  <span class="text-lg">目前無使用者</span>
                </template>
              </a-empty>
            </a-tab-pane>
            <a-tab-pane key="2" tab="新使用者人數">
              <a-empty class="empty">
                <template #description>
                  <span class="text-lg">無新使用者</span>
                </template>
              </a-empty>
            </a-tab-pane>
            <a-tab-pane key="3" tab="平均參與時間">
              <a-empty class="empty">
                <template #description>
                  <span class="text-lg">無資料</span>
                </template>
              </a-empty>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<style scoped>
.empty {
  padding: 2rem;
}
</style>
