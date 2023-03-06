<template>

<div class="full-width">

  <q-tabs
    v-model="activeTabRef"
    class="shadow-2"
    indicator-color="primary"
    align="left"
    dense
  >
    <slot name="tabs" />
  </q-tabs>

  <q-separator />

  <q-tab-panels
    v-model="activeTabRef"
    keep-alive
    animated
  >
    <slot name="panels" />
  </q-tab-panels>

</div>

</template>

<script lang="ts">

export default {
  name: 'TabList',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps<{
  activeTab: string
}>()

const activeTabRef = ref(props.activeTab)

</script>
