<template>

<CardsUi.CardActions>
  <slot />
  <q-space />
  <ButtonsUi.ButtonRegular
    label="Cancel"
    text-color="red-5"
    @click="emits('cancel')"
  />
  <ButtonsUi.ButtonRegular
    label="Apply Changes"
    text-color="green-4"
    @click="emits('apply')"
  />
</CardsUi.CardActions>

</template>

<script setup lang="ts">

import { CardsUi } from '@/modules/gui/cards'
import { ButtonsUi } from '@/modules/gui/buttons'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'cancel'): void,
  (e: 'apply'): void
}>()

</script>
