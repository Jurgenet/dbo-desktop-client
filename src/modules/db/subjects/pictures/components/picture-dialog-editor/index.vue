<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 450px">

    <q-card-section>
      <div class="text-h6">Picture Updating</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputUi.Input
          v-model="pictureRef.dto._id"
          label="ID"
          readonly
        />

        <InputUi.Input
          v-model="pictureRef.dto.url"
          label="Url"
          readonly
        />

        <InputUi.Input
          v-model="pictureRef.dto.size"
          label="Size"
          readonly
        />

        <InputUi.Input
          v-model="pictureRef.dto.title"
          label="Title"
        />

        <InputUi.Input
          v-model="pictureRef.dto.group"
          label="Group"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <ButtonUi.ButtonCancel @click="onDialogHide" />
      <ButtonUi.ButtonOk @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { ButtonUi } from '@/modules/gui/buttons'
import { InputUi } from '@/modules/gui/input'
import { picturesClasses } from '@/modules/db/subjects/pictures'

const props = defineProps<{ picture: picturesClasses.IPicture }>()
defineEmits([...useDialogPluginComponent.emits])

const pictureRef = ref(props.picture as picturesClasses.IPicture)

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

function onApply () {
  if (pictureRef.value.dto._id) {
    onDialogOK({ appliedPicture: pictureRef.value })
  }
}

</script>
