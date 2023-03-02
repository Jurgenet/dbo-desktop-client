<template>

<ButtonUi.ButtonMini :color="isPinned ? 'yellow-8' : 'grey-4'" icon="push_pin">
  <slot />
</ButtonUi.ButtonMini>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniPin',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

defineProps<{
  isPinned: boolean
}>()

</script>
