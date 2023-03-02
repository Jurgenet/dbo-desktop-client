<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Subject {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.RegularInput
          v-model="subjectRef.dto.type"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Type"
        />

        <!-- <InputsUi.RegularInput
          v-model="subjectRef.dto.globalId"
          label="Global ID"
        />

        <InputsUi.RegularInput
          v-model="subjectRef.dto.titleEn"
          label="Title (en)"
        />

        <InputsUi.RegularInput
          v-model="subjectRef.dto.titleRu"
          label="Title (ru)"
        />

        <InputsUi.RegularInput
          v-model="subjectRef.dto.cover"
          label="Cover"
        />

        <InputsUi.RegularInput
          v-model="subjectRef.dto.price"
          label="Price"
        />

        <InputsUi.RegularInput
          v-model="subjectRef.dto.text"
          label="Text"
          type="textarea"
        /> -->

      </div>
    </q-card-section>

    <CardsUi.CardActionsCancelApply
      @cancel="onDialogHide"
      @apply="onApply"
    />

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { CardsUi } from '@/modules/gui/cards'
import { InputsUi } from '@/modules/gui/inputs'

import { wowClasses } from '@/modules/db/subjects/wow'

const props = defineProps<{ isCreating: boolean, subject: wowClasses.ISubject }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const subjectRef = ref(props.subject as wowClasses.ISubject)

function onApply () {
  if (subjectRef.value.dto.type) {
    onDialogOK({ appliedSubject: subjectRef.value })
  }
}

</script>
