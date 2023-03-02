<template>

<div class="q-py-lg row q-gutter-x-sm actionControls">

  <ButtonUi.Button
    class="q-ml-sm text-white bg-primary"
    icon="reply"
    disable
    @click="emits('exit')"
  />

  <ButtonUi.Button
    :label="isEditing ? 'save' : 'edit'"
    :class="{ 'bg-green-3': isEditing }"
    :outline="!isEditing"
    @click="emits('toggle-edit')"
  />

  <ButtonUi.Button
    v-if="isEditing"
    label="cancel"
    outline
    @click="emits('cancel-edit')"
  />

  <ButtonUi.Button
    v-if="!isEditing"
    label="refresh"
    outline
    @click="emits('refresh')"
  />
</div>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

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
