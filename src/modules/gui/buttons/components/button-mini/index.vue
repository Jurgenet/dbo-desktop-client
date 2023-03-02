<template>

<ButtonUi.Button
  :icon="icon"
  :color="color"
  size="12px"
  round
  dense
  flat
>
  <slot />
</ButtonUi.Button>

</template>

<script lang="ts">

export default {
  name: 'ButtonMini',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

withDefaults(defineProps<{
  icon?: string
  color?: string
}>(), {
  icon: 'favorite',
  color: 'primary', // 'grey-8',
})

</script>
