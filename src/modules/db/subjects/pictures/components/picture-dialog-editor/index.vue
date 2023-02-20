<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 450px">

    <q-card-section>
      <div class="text-h6">Picture Updating</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.RegularInput
          v-model="pictureRef.dto._id"
          label="ID"
          readonly
        />

        <InputsUi.RegularInput
          v-model="pictureRef.dto.url"
          label="Url"
          readonly
        />

        <InputsUi.RegularInput
          v-model="pictureRef.dto.size"
          label="Size"
          readonly
        />

        <InputsUi.RegularInput
          v-model="pictureRef.dto.title"
          label="Title"
        />

        <InputsUi.RegularInput
          v-model="pictureRef.dto.group"
          label="Group"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn label="Cancel" flat text-color="red-5" @click="onDialogHide" />
      <q-btn label="Apply Changes" flat text-color="green-4" @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { InputsUi } from '@/modules/gui/inputs'
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
