<template>

<q-pagination
  :model-value="modelValue"
  :max="max"
  icon-first="skip_previous"
  icon-last="skip_next"
  icon-prev="fast_rewind"
  icon-next="fast_forward"
  direction-links
  boundary-links
  @update:modelValue="emits('update:modelValue', $event)"
/>

</template>

<script setup lang="ts">

defineProps<{
  modelValue: number
  max: number
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value : number) : void
}>()

</script>
