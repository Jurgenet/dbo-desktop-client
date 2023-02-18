<template>

<q-page class="q-pa-md column">
  <TabsUi.TabList activeTab="main">

    <template #tabs>
      <q-tab name="main" label="images" />
      <q-tab name="settings" label="settings" />
    </template>

    <template #panels>

      <q-tab-panel name="main">
        <div>Picture List</div>
      </q-tab-panel>

      <q-tab-panel name="settings" class="column q-gutter-y-md">
        <q-btn label="upload" @click="onUpload" />
      </q-tab-panel>

    </template>

  </TabsUi.TabList>
</q-page>

</template>

<script setup lang="ts">

import { TabsUi } from '@/modules/gui/tabs'
import { useFilesDialogUpload } from '@/modules/gui/files'

function onUpload () {
  useFilesDialogUpload()
}

</script>
