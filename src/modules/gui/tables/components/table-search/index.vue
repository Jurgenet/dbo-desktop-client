<template>

<q-input
  :model-value="modelRef"
  debounce="300"
  placeholder="Search"
  borderless
  dense
  clearable
  @update:model-value="emits('update', $event)"
>
  <template v-slot:append>
    <q-icon name="search" />
  </template>
</q-input>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
  model?: string
}>(), {
  model: '',
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update', value: string | number | null): void
}>()

const modelRef = ref(props.model)

</script>
