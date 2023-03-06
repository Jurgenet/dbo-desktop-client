<template>

<div class="row">

  <div class="text-bold">
    <div>File names:</div>
    <div>Max files:</div>
    <div>Max file size:</div>
    <div>Max total size:</div>
    <div>Images accepted:</div>
  </div>

  <div class="q-ml-md">
    <div class="text-red-8">English letters only!</div>
    <div>{{ fileConsts.MAX_FILES_UPLOAD }}</div>
    <div>{{ mathUtils.bytesToMegabytes(fileConsts.MAX_FILE_SIZE_UPLOAD) }} MB</div>
    <div>{{ mathUtils.bytesToMegabytes(fileConsts.MAX_TOTAL_SIZE_UPLOAD) }} MB</div>
    <div>{{ fileConsts.IMAGES_FILE_ACCEPT }}</div>
  </div>

</div>

</template>

<script setup lang="ts">

import { mathUtils } from '@/modules/core/math'
import { fileConsts } from '@/modules/gui/file'

</script>
