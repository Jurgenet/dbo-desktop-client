<template>

<q-bar class="bg-grey-3 text-primary flex" dark>
  <div><b>{{ title }}</b></div>
  <q-space />
  <slot name="right" />
</q-bar>

</template>

<script setup lang="ts">

defineProps<{
  title: string
}>()

</script>
