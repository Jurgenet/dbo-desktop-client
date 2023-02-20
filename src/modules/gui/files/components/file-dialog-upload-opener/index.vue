<template>

<div @click="onOpen">
  <slot />
</div>

</template>

<script setup lang="ts">

import { useFilesDialogUpload } from '@/modules/gui/files'

function onOpen () {
  useFilesDialogUpload()
}

</script>

<script lang="ts">

export default {
  name: 'FileDialogUploadOpener',
  inheritAttrs: false,
}

</script>
