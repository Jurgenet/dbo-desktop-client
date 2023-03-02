<template>

<ButtonUi.ButtonMini icon="clear" color="grey-6" size="10px">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniClose',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>
