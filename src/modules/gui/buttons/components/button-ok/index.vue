<template>

<ButtonUi.Button label="ok" color="green-4">
  <slot />
</ButtonUi.Button>

</template>

<script lang="ts">

export default {
  name: 'ButtonOk',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>
