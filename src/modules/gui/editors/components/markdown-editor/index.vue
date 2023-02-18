<template>

<MdEditor
  :model-value="modelValue"
  language="en-US"
  @update:model-value="emits('update:modelValue', $event)"
/>

</template>

<script setup lang="ts">

import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

defineProps<{
  modelValue: string
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

</script>
