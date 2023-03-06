<template>

<q-td auto-width>
  <ButtonUi.ButtonMiniExpander
    :is-expanded="expand"
    :is-disabled="!props.row.dto.text"
    @click="emits('toggle')"
  />
</q-td>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

const props = defineProps<{
  expand: boolean
  row: { dto: { text: string } }
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'toggle'): void
}>()

</script>
