<template>

<PagesUi.Page no-padding>
  <TabsUi.TabList activeTab="typos">

    <template #tabs>
      <TabsUi.Tab v-for="room in rooms" :key="room.name" :name="room.name" :label="room.name" />
    </template>

    <template #panels>
      <TabsUi.TabPanel v-for="room in rooms" :key="room.name" :name="room.name">
        <component :is="room.component" />
      </TabsUi.TabPanel>
    </template>

  </TabsUi.TabList>
</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'ShowroomPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { defineAsyncComponent } from 'vue'

import { PagesUi } from '@/modules/gui/pages'
import { TabsUi } from '@/modules/gui/tabs'

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
