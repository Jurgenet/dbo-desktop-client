<template>

<q-inner-loading :showing="isVisible">
  <div class="q-pa-sm text-primary" style="font-size: 1.1em;">Please wait...</div>
  <q-spinner-gears color="primary" size="50px" />
</q-inner-loading>

</template>

<script lang="ts">

export default {
  name: 'GlobalPreloader',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  isVisible: boolean
}>()

</script>
