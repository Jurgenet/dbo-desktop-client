<template>

<PagesUi.Page no-padding>
  <TabsUi.TabList activeTab="typos">

    <template #tabs>
      <TabsUi.Tab name="typos" label="typos" />
      <TabsUi.Tab name="buttons" label="buttons" />
      <TabsUi.Tab name="cards" label="cards" />
      <TabsUi.Tab name="tables" label="tables" />
    </template>

    <template #panels>

      <TabsUi.TabPanel name="typos">
        <TyposRoom />
      </TabsUi.TabPanel>

      <TabsUi.TabPanel name="buttons">
        <ButtonsRoom />
      </TabsUi.TabPanel>

      <TabsUi.TabPanel name="cards">
        <CardsRoom />
      </TabsUi.TabPanel>

      <TabsUi.TabPanel name="tables">
        <TablesRoom />
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

import { PagesUi } from '@/modules/gui/pages'
import { TabsUi } from '@/modules/gui/tabs'

import TyposRoom from './typos/index.vue'
import ButtonsRoom from './buttons/index.vue'
import CardsRoom from './cards/index.vue'
import TablesRoom from './tables/index.vue'

</script>
