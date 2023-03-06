<template>

<PageUi.Page no-padding>
  <TabUi.TabList activeTab="typos">

    <template #tabs>
      <TabUi.Tab v-for="room in rooms" :key="room.name" :name="room.name" :label="room.name" />
    </template>

    <template #panels>
      <TabUi.TabPanel v-for="room in rooms" :key="room.name" :name="room.name">
        <component :is="room.component" />
      </TabUi.TabPanel>
    </template>

  </TabUi.TabList>
</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'ShowroomPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { defineAsyncComponent } from 'vue'

import { PageUi } from '@/modules/gui/page'
import { TabUi } from '@/modules/gui/tab'

const rooms = [
  {
    name: 'typos',
    component: defineAsyncComponent(() => import('./typos/index.vue')),
  },
  {
    name: 'buttons',
    component: defineAsyncComponent(() => import('./buttons/index.vue')),
  },
  {
    name: 'selects',
    component: defineAsyncComponent(() => import('./selects/index.vue')),
  },
  {
    name: 'cards',
    component: defineAsyncComponent(() => import('./cards/index.vue')),
  },
  {
    name: 'tables',
    component: defineAsyncComponent(() => import('./tables/index.vue')),
  },
  {
    name: 'expansion',
    component: defineAsyncComponent(() => import('./expansions/index.vue')),
  },
  {
    name: 'options',
    component: defineAsyncComponent(() => import('./options/index.vue')),
  },
]

</script>
