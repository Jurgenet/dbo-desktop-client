<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 360px">

    <q-card-section>
      <div class="text-h6">File(s) Upload</div>
    </q-card-section>

    <q-card-section>
      <div class="column q-gutter-y-lg">
        <FileRules />
        <FileUi.FileUploader />
      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <ButtonUi.Button label="close" @click="onDialogHide" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { useDialogPluginComponent } from 'quasar'

import FileRules from './file-rules/index.vue'

import { ButtonUi } from '@/modules/gui/button'
import { FileUi } from '@/modules/gui/file'

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide } = useDialogPluginComponent()

</script>
