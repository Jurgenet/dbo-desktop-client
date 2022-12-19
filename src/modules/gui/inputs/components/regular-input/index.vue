<template>

<q-input
  :model-value="model"
  dense
  autofocus
  @update:model-value="emits('update', $event)"
/>

</template>

<script setup lang="ts">

defineProps(['model'])
const emits = defineEmits(['update'])

</script>
