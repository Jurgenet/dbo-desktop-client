<template>

<q-select
  :model-value="modelValue"
  :options="options"
  placeholder="Type"
  dense
  autofocus
  outlined
  @update:model-value="emits('update:modelValue', $event)"
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
  modelValue: string
  options: string[]
}>(), {
  //
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

</script>
