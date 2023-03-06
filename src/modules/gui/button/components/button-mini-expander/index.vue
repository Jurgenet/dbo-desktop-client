<template>

<ButtonUi.ButtonMini
  :icon="isExpanded ? 'remove' : 'add'"
  text-color="white"
  :class="isDisabled ?'bg-grey-5' : 'bg-primary'"
  :disabled="isDisabled"
  :size="size"
  dense
  round
>
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniExpander',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'

withDefaults(defineProps<{
  isExpanded: boolean
  isDisabled?: boolean
  size?: string
}>(), {
  isDisabled: false,
  size: 'sm',
})

</script>
