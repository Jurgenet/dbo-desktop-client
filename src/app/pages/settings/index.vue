<template>

<PageUi.Page>
  <TabUi.TabList activeTab="main">

  <template #tabs>
    <q-tab name="main" label="main" />
    <q-tab name="other" label="other" />
  </template>

  <template #panels>

    <q-tab-panel name="main">
      <div>No settings yet</div>
    </q-tab-panel>

    <q-tab-panel name="other">
      <div>No settings yet</div>
    </q-tab-panel>

  </template>

  </TabUi.TabList>
</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'SettingsPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { PageUi } from '@/modules/gui/page'
import { TabUi } from '@/modules/gui/tab'

</script>
