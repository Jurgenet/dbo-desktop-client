<template>

<q-page class="q-pa-md column">
  <TabsUi.TabList activeTab="main">

    <template #tabs>
      <q-tab name="main" label="images" />
      <q-tab name="settings" label="settings" />
    </template>

    <template #panels>

      <q-tab-panel name="main">
        <div class="row justify-start items-start q-gutter-md">
          <PicturesUi.PictureCard
            v-for="picture in picturesStore.pictures"
            :key="picture._id"
            :picture="picture"
          />
        </div>
      </q-tab-panel>

    </template>

  </TabsUi.TabList>
</q-page>

</template>

<script setup lang="ts">

import { usePicturesStore } from '@/stores/pictures'

import { TabsUi } from '@/modules/gui/tabs'

import { PicturesUi } from '@/modules/db/subjects/pictures'

const picturesStore = usePicturesStore()

</script>
