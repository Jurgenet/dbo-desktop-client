<template>

<ButtonUi.Button
  class="bg-primary"
  label="create"
  text-color="white"
>
  <slot />
</ButtonUi.Button>

</template>

<script lang="ts">

export default {
  name: 'ButtonCreate',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>
