<template>

<q-tab
  :name="name"
  :label="label"
/>

</template>

<script lang="ts">

export default {
  name: 'TheTab',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  name: string
  label: string
}>()

</script>
