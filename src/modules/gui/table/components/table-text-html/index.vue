<template>

<q-tr :props="props">
  <q-td colspan="100%">
    <div v-html="props.row.dto.text" class="text-left" />
  </q-td>
</q-tr>

</template>

<script setup lang="ts">

const props = defineProps<{
  row: { dto: { text: string } }
  expand: boolean
  pageIndex: number
  rowIndex: number
}>()

</script>
