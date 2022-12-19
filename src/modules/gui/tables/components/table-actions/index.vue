<template>

<div class="row q-gutter-sm">
  <ButtonsUi.TypedButton
    :type="ButtonsUi.TypedButtonType.Regular"
    label="Refresh"
    @click="emits('refresh')"
  />
  <ButtonsUi.TypedButton
    :type="ButtonsUi.TypedButtonType.Create"
    @click="emits('create')"
  />

</div>

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'refresh'): void
  (e: 'create'): void
}>()

</script>
