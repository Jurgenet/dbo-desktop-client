<template>

<ButtonUi.Button stretch>
  <slot />
</ButtonUi.Button>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>

<script lang="ts">

export default {
  name: 'ButtonRoute',
  inheritAttrs: true,
}

</script>
