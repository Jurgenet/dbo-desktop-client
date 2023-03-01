<template>

<ButtonsUi.ButtonRegular
  class="bg-primary"
  label="create"
  text-color="white"
>
  <slot />
</ButtonsUi.ButtonRegular>

</template>

<script lang="ts">

export default {
  name: 'ButtonCreate',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

</script>
