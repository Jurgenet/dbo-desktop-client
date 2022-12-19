<template>

<q-tr :props="props">
  <q-td colspan="100%">
    <pre class="text-left">{{ props.row.text }}</pre>
  </q-td>
</q-tr>

</template>

<script setup lang="ts">

const props = defineProps<{
  row: { text?: string }
  expand: boolean
  pageIndex: number
  rowIndex: number
}>()

</script>
