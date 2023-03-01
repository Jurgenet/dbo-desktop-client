<template>

<div class="q-py-lg row q-gutter-x-sm actionControls">

  <ButtonsUi.ButtonRegular
    class="q-ml-sm text-white bg-primary"
    icon="reply"
    disable
    @click="emits('exit')"
  />

  <ButtonsUi.ButtonRegular
    :label="isEditing ? 'save' : 'edit'"
    :class="{ 'bg-green-3': isEditing }"
    :outline="!isEditing"
    @click="emits('toggle-edit')"
  />

  <ButtonsUi.ButtonRegular
    v-if="isEditing"
    label="cancel"
    outline
    @click="emits('cancel-edit')"
  />

  <ButtonsUi.ButtonRegular
    v-if="!isEditing"
    label="refresh"
    outline
    @click="emits('refresh')"
  />
</div>

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

defineProps<{
  isEditing: boolean
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'exit'): void
  (e: 'toggle-edit'): void
  (e: 'cancel-edit'): void
  (e: 'refresh'): void
}>()

</script>
