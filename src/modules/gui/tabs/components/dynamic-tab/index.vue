<template>

<q-tab
  :name="name"
  :label="label"
  :alert="isAlert && 'orange'"
>
  <q-btn
    :disabled="isAlert"
    class="q-mx-sm"
    icon="clear"
    color="grey-6"
    size="8px"
    dense
    @click="emits('remove', props)"
  />
</q-tab>

</template>

<script setup lang="ts">

import { tabsDto } from '@/gui/tabs'

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
