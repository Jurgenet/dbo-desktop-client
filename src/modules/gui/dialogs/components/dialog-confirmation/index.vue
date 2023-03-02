<template>

<q-dialog ref="dialogRef" persistent>
  <q-card>

    <q-card-section class="row items-center">
      <q-avatar icon="question_mark" color="primary" text-color="white" />
      <span class="q-ml-sm">{{ message }}</span>
    </q-card-section>

    <q-card-actions align="right">
      <ButtonUi.ButtonCancel @click="onDialogHide" />
      <ButtonUi.ButtonOk @click="onDialogOK" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { useDialogPluginComponent } from 'quasar'

import { ButtonUi } from '@/modules/gui/buttons'

defineProps<{ message: string }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

</script>
