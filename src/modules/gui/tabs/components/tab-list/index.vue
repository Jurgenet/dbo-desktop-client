<template>

<div class="full-width">
  <q-tabs
    v-model="activeTabRef"
    class="shadow-2"
    align="left"
    indicator-color="primary"
    dense
  >
    <slot name="tabs" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="activeTabRef" animated keep-alive>
    <slot name="panels" />
  </q-tab-panels>
</div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps<{
  activeTab: string
}>()

const activeTabRef = ref(props.activeTab)

</script>
