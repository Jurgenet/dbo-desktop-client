<template>

<q-page class="q-pa-md column">
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
</q-page>

</template>

<script setup lang="ts">

import { TabsUi } from '@/modules/gui/tabs'

</script>
