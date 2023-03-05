<template>

<q-input
  :model-value="modelValue"
  dense
  autofocus
  outlined
  @update:modelValue="emits('update:modelValue', $event ?? '')"
/>

</template>

<script lang="ts">

export default {
  name: 'TheInput',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{ modelValue: string | number }>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value : string | number) : void
}>()

</script>
