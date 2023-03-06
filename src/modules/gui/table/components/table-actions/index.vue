<template>

<div class="row q-gutter-sm">
  <ButtonUi.Button label="refresh" @click="emits('refresh')" />
  <ButtonUi.ButtonCreate @click="emits('create')" />
</div>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'refresh'): void
  (e: 'create'): void
}>()

</script>
