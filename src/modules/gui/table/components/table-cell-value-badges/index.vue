<template>

<div v-if="type === tableConsts.COLUMN_TYPES.BADGES">
  <div class="row q-gutter-sm no-wrap">
    <BadgeUi.Badge
      v-for="item in value" :key="`item-${item}`"
      :label="item"
      outline
    />
  </div>
</div>

</template>

<script lang="ts">

export default {
  name: 'TableCellValueBadges',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { BadgeUi } from '@/modules/gui/badge'
import { tableConsts } from '@/modules/gui/table'

defineProps<{
  type: string
  value?: any
}>()

</script>
