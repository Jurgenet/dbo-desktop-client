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

import { tabsDto } from '@/modules/gui/tabs'
import { ButtonUi } from '@/modules/gui/buttons'

// TODO: IS-003
const props = defineProps<{
  name: string
  label: string
  isAlert: boolean
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'remove', tab: tabsDto.ITab): void
}>()

</script>
