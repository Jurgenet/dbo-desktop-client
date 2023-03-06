<template>

<q-inner-loading :showing="isVisible">
  <q-spinner color="primary" size="3em" />
</q-inner-loading>

</template>

<script lang="ts">

export default {
  name: 'ThePreloader',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  isVisible: boolean
}>()

</script>
