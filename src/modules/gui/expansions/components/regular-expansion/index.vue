<template>

<q-expansion-item
  v-bind="$attrs"
  v-model="expandedRef"
  :icon="icon"
  :label="label"
  :caption="caption"
  expand-separator
  switch-toggle-side
>
  <div class="q-pa-sm">
    <slot />
  </div>
</q-expansion-item>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
  icon?: string
  label?: string
  caption?: string
  isOpened?: boolean
}>(), {
  isOpened: false,
})

const expandedRef = ref(props.isOpened)

</script>
