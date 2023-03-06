<template>

<ButtonUi.Button label="Cancel" color="red-4">
  <slot />
</ButtonUi.Button>

</template>

<script lang="ts">

export default {
  name: 'ButtonCancel',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

</script>
