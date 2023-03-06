<template>

  <!-- v-model:fullscreen="isFullscreen" -->
<q-editor
  :model-value="modelValue"
  :definitions="{}"
  :toolbar="[
    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
    ['token', 'hr', 'link', 'custom_btn'],
    ['print', 'fullscreen'],
    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
    ['undo', 'redo'],
    ['viewsource'],
  ]"
  min-height="5rem"
  @update:model-value="emits('update:modelValue', $event)"
  />

</template>

<script setup lang="ts">

defineProps<{
  modelValue: string
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue : string) : void
}>()

</script>
