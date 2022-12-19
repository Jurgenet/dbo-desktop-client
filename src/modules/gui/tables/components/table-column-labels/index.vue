<template>

<q-tr :props="props">
  <q-th auto-width />
  <q-th v-for="col in props.cols" :key="col.name" :props="props">
    {{ col.label }}
  </q-th>
</q-tr>

</template>

<script setup lang="ts">

const props = defineProps<{
  cols: Array<{ name: string, label: string }>
  colsMap?: unknown
  color?: string
  dark?: boolean
  dense?: boolean
  header?: boolean
}>()

</script>
