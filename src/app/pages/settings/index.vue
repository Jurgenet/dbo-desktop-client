<template>

<PagesUi.Page>
  <TabsUi.TabList activeTab="main">

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

  </TabsUi.TabList>
</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'SettingsPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { PagesUi } from '@/modules/gui/pages'
import { TabsUi } from '@/modules/gui/tabs'

</script>
