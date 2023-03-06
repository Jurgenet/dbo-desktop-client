<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Subject {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <SelectUi.Select
          v-model="subjectRef.dto.type"
          :options="types"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Type"
        />

        <InputUi.Input
          v-model="subjectRef.dto.globalId"
          label="Global ID"
        />

        <InputUi.Input
          v-model="subjectRef.dto.titleEn"
          label="Title (en)"
        />

        <InputUi.Input
          v-model="subjectRef.dto.titleRu"
          label="Title (ru)"
        />

        <InputUi.Input
          v-model="subjectRef.dto.cover"
          label="Cover"
        />

        <InputUi.Input
          v-model="subjectRef.dto.price"
          label="Price"
        />

        <SelectUi.Select
          v-model="subjectRef.dto.professions"
          :options="wowStore.professions"
          label="professions"
          class="col-1"
          multiple
          use-chips
        />

        <!-- <InputUi.Input
          v-model="subjectRef.dto.options"
          label="Options"
        /> -->

        <InputUi.Input
          v-model="subjectRef.dto.zone"
          label="Zone"
        />

        <InputUi.Input
          v-model="subjectRef.dto.person"
          label="Person"
        />

        <InputUi.Input
          v-model="subjectRef.dto.ancestor"
          label="Ancestor"
        />

        <InputUi.Input
          v-model="subjectRef.dto.text"
          label="Text"
          type="textarea"
        />

      </div>
    </q-card-section>

    <CardUi.CardActionsCancelApply
      @cancel="onDialogHide"
      @apply="onApply"
    />

  </q-card>
</q-dialog>

</template>

<script lang="ts">

export default {
  name: 'SubjectDialogCreation',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { useWowStore } from '@/stores/wow'

import { CardUi } from '@/modules/gui/card'
import { SelectUi } from '@/modules/gui/select'
import { InputUi } from '@/modules/gui/input'

import { wowClasses } from '@/modules/db/subjects/wow'

const wowStore = useWowStore()

const props = defineProps<{ isCreating: boolean, subject: wowClasses.ISubject }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const types = Object.values(wowClasses.ISubjectTypes)
const subjectRef = ref(props.subject as wowClasses.ISubject)

function onApply () {
  if (subjectRef.value.dto.type) {
    onDialogOK({ appliedSubject: subjectRef.value })
  }
}

</script>
