<template>

<div v-if="type === tableConsts.COLUMN_TYPES.COPIABLE">
  <div class="row items-center justify-start no-wrap">
    <ButtonUi.ButtonMiniCopy :clip-value="value" size="10px" />
    <div class="q-ml-sm">{{ value }}</div>
  </div>
</div>

</template>

<script lang="ts">

export default {
  name: 'TableCellValueCopiable',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'
import { tableConsts } from '@/modules/gui/tables'

defineProps<{
  type: string
  value?: any
}>()

</script>
