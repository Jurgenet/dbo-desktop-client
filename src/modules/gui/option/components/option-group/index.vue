<template>

<q-option-group
  :model-value="modelValue"
  :options="options"
  :inline="inline"
  color="primary"
  @update:model-value="emits('update:model-value', $event)"
/>

</template>

<script lang="ts">

export default {
  name: 'OptionGroup',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

withDefaults(defineProps<{
  modelValue: any
  options: any
  inline?: boolean
}>(), {
  inline: false,
})

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:model-value', modelValue : any): void
}>()

</script>
