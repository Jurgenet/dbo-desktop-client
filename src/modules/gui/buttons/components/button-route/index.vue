<template>

<ButtonsUi.ButtonRegular stretch>
  <slot />
</ButtonsUi.ButtonRegular>

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

</script>

<script lang="ts">

export default {
  name: 'ButtonRoute',
  inheritAttrs: true,
}

</script>
