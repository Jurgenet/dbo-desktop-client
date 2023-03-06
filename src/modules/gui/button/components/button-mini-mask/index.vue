<template>

<ButtonUi.ButtonMini icon="password">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniMask',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

</script>
