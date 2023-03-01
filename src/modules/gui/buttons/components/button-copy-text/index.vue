<template>

<ButtonsUi.ButtonRegular @click="onAction">
  <slot />
</ButtonsUi.ButtonRegular>

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

import { clipboardUtils } from '@/modules/core/clipboard'

const props = withDefaults(defineProps<{
  text?: string
}>(), {
  text: '',
})

function onAction () {
  clipboardUtils.clip(props.text)
}

</script>

<script lang="ts">

export default {
  name: 'ButtonCopyText',
  inheritAttrs: true,
}

</script>
