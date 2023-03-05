<template>

<ButtonCopy icon="content_copy">
  <slot />
</ButtonCopy>

</template>

<script lang="ts">

export default {
  name: 'ButtonMiniCopy',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'
import { withClipboard } from '@/modules/core/clipboard'

const ButtonCopy = withClipboard(ButtonUi.ButtonMini)

</script>
