<template>

<div class="q-py-lg row q-gutter-x-sm actionControls">
  <q-btn
    icon="reply"
    class="q-ml-sm text-white bg-primary"
    flat
    disable
    @click="emits('exit')"
  />
  <q-btn
    :label="isEditing ? 'save' : 'edit'"
    :class="{ 'bg-green-3': isEditing }"
    :outline="!isEditing"
    @click="emits('toggle-edit')"
  />
  <q-btn v-if="isEditing" label="cancel" outline @click="emits('cancel-edit')" />
  <q-btn v-if="!isEditing" label="refresh" outline @click="emits('refresh')" />
</div>

</template>

<script setup lang="ts">

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
