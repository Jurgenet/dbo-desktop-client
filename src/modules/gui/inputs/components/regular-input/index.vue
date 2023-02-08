<template>

<q-input
  :model-value="modelValue"
  dense
  autofocus
  outlined
  @update:modelValue="emits('update:modelValue', $event ?? '')"
/>

</template>

<script setup lang="ts">

defineProps<{ modelValue: string }>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value : string | number) : void
}>()

</script>
