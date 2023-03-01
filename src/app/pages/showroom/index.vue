<template>

<PagesUi.Page>
  <TabsUi.TabList activeTab="typos">

    <template #tabs>
      <TabsUi.Tab name="typos" label="typos" />
      <TabsUi.Tab name="buttons" label="buttons" />
    </template>

    <template #panels>

      <TabsUi.TabPanel name="typos">
        <div>Typos</div>
      </TabsUi.TabPanel>

      <TabsUi.TabPanel name="buttons">
        <div>Buttons</div>
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

</script>
