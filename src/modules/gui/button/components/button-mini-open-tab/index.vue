<template>

<ButtonUi.ButtonMini icon="open_in_new">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniOpenTab',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

</script>
