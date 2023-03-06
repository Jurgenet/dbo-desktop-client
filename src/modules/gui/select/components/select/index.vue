<template>

<q-select
  :model-value="modelValue"
  :options="options"
  :label="label"
  :multiple="multiple"
  :use-chips="useChips"
  dense
  autofocus
  outlined
  @update:model-value="emits('update:model-value', $event)"
/>

</template>

<script lang="ts">

export default {
  name: 'TheSelect',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

// @see https://quasar.dev/vue-components/select

withDefaults(defineProps<{
  modelValue: string | string[]
  options: string[]
  label?: string
  multiple?: boolean
  useChips?: boolean
}>(), {
  multiple: false,
  useChips: true,
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:model-value', modelValue: string): void
}>()

</script>
