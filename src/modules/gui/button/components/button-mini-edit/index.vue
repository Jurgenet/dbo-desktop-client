<template>

<ButtonUi.ButtonMini icon="edit">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniEdit',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

</script>
