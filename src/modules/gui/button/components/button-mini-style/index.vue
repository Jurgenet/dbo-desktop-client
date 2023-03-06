<template>

<ButtonUi.ButtonMini icon="style">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniStyle',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

</script>
