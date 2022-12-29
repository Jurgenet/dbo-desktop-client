<template>

<q-page class="q-pa-md column">
  <div class="full-width">

    <q-tabs
      v-model="activeTab"
      class="shadow-2"
      align="left"
      indicator-color="primary"
      dense
    >
      <q-tab name="main" label="main" />
      <q-tab name="database" label="database" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="activeTab" animated keep-alive>

      <q-tab-panel name="main">
        <div>No settings yet</div>
      </q-tab-panel>

      <q-tab-panel name="database" class="column q-gutter-y-md">

        <DbUi.DbToggle />

        <div>
          <q-btn label="do backup" @click="onDoBackup" />
        </div>

      </q-tab-panel>

    </q-tab-panels>

  </div>

</q-page>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { DbUi, dbApiRequests } from '@/modules/db'

const apiRequests = dbApiRequests()

const activeTab = ref('main')

function onDoBackup () {
  apiRequests.backup()
}

</script>
