<template>

<q-inner-loading :showing="isVisible">
  <q-spinner color="primary" size="3em" />
</q-inner-loading>

</template>

<script setup lang="ts">

defineProps<{
  isVisible: boolean
}>()

</script>
