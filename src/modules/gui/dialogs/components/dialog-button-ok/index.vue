<template>

<ButtonUi.Button v-close-popup label="ok" />

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>

<script lang="ts">

export default {
  name: 'DialogButtonOK',
  inheritAttrs: false,
}

</script>
