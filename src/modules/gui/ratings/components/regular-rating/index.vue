<template>

<q-rating
  :model-value="modelValue"
  max="5"
  size="1.5em"
  color="yellow"
  icon="star_border"
  icon-selected="star"
  icon-half="star_half"
  @update:model-value="emits('update:modelValue', $event)"
/>

</template>

<script setup lang="ts">

defineProps<{
  modelValue: number
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value : number) : void
}>()

</script>
