<template>

<q-tab
  :name="name"
  :label="label"
  :alert="isAlert && 'orange'"
>
  <ButtonUi.ButtonMiniClose
    :disabled="isAlert"
    class="q-mx-sm"
    @click="emits('remove', props)"
  />
</q-tab>

</template>

<script setup lang="ts">

import { tabDto } from '@/modules/gui/tab'
import { ButtonUi } from '@/modules/gui/button'

// TODO: IS-003
const props = defineProps<{
  name: string
  label: string
  isAlert: boolean
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'remove', tab: tabDto.ITab): void
}>()

</script>
