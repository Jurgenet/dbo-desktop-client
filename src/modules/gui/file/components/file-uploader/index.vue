<template>

<q-uploader
  :url="appStore.filesUploadUrl.value"
  :no-thumbnails="noThumbnails"
  :dark="dark"
  :multiple="multiple"
  :batch="batch"
  :auto-upload="autoUpload"
  :max-file-size="maxFileSize"
  :max-total-size="maxTotalSize"
  :max-files="maxFiles"
  :accept="accept"
  :form-fields="[{ name: 'group', value: 'na' }]"
  :field-name="fieldName"
  :label="label"
  :style="style"
  flat
  bordered
  @rejected="onRejected"
/>

</template>

<script setup lang="ts">

// @see more file types: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers

import useAppStore from '@/stores/app'

import { notificationUtils } from '@/modules/core/notification'
import { fileConsts } from '@/modules/gui/file'

withDefaults(defineProps<{
  label?: string,
  maxFileSize?: string,
  maxTotalSize?: string,
  maxFiles?: string,
  accept?: string,
  fieldName?: string,
  noThumbnails?: boolean
  multiple?: boolean,
  batch?: boolean,
  autoUpload?: boolean,
  dark?: boolean
  style?: string,
}>(), {
  label: 'Upload files',
  maxFileSize: fileConsts.MAX_FILE_SIZE_UPLOAD,
  maxTotalSize: fileConsts.MAX_TOTAL_SIZE_UPLOAD,
  maxFiles: fileConsts.MAX_FILES_UPLOAD,
  accept: fileConsts.IMAGES_FILE_ACCEPT,
  fieldName: 'file',
  noThumbnails: false,
  multiple: true,
  batch: false,
  autoUpload: false,
  dark: false,
  style: 'max-width: 360px',
})

const appStore = useAppStore()

function onRejected (rejectedEntries: string | any[]) {
  notificationUtils.showNegative(`${rejectedEntries.length} file(s) did not pass validation constraints`)
}

</script>
