<template>

<div @click="onOpen">
  <slot />
</div>

</template>

<script setup lang="ts">

import { useFileDialogUpload } from '@/modules/gui/file'

function onOpen () {
  useFileDialogUpload()
}

</script>

<script lang="ts">

export default {
  name: 'FileDialogUploadOpener',
  inheritAttrs: false,
}

</script>
