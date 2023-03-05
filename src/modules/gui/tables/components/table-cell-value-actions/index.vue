<template>

<div v-if="type === tableConsts.COLUMN_TYPES.ACTIONS" class="row justify-end no-wrap">
  <slot />
</div>

</template>

<script lang="ts">

export default {
  name: 'TableCellValueActions',
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
