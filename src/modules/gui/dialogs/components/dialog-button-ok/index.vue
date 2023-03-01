<template>

<ButtonsUi.ButtonRegular v-close-popup label="ok" />

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

</script>

<script lang="ts">

export default {
  name: 'DialogButtonOK',
  inheritAttrs: false,
}

</script>
