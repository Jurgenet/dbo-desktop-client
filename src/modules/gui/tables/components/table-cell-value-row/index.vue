<template>

<div v-if="type === tableConsts.COLUMN_TYPES.ROW">
  {{ value }}
</div>

</template>

<script lang="ts">

export default {
  name: 'TableCellValueRow',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { tableConsts } from '@/modules/gui/tables'

defineProps<{
  type: string
  value?: any
}>()

</script>
