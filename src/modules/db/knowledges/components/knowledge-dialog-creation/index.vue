<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Knowledge {{ knowledgeRef._id ? 'Updating' : 'Creating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <q-select
          v-model="knowledgeRef.type"
          :options="knowledgeTypes"
          :rules="[val => !!val || 'Field is required']"
          placeholder="Type"
          dense
          autofocus
        />

        <InputsUi.Regular
          v-model="knowledgeRef.date"
          label="Date"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.title"
          label="Title"
          :rules="[(val: string) => !!val || 'Field is required']"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.platform"
          label="Platform"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.author"
          label="Author"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.lang"
          label="Lang"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.cover"
          label="Cover"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.location"
          label="Location"
        />
        <InputsUi.Regular
          v-model="knowledgeRef.link"
          label="Link"
        />

        <q-input
          v-model="knowledgeRef.isActive"
          placeholder="isActive"
          dense
          autofocus
        />

        <q-input
          v-model="knowledgeRef.isDone"
          placeholder="isDone"
          dense
          autofocus
        />

        <q-input
          v-model="knowledgeRef.isOnline"
          placeholder="isOnline"
          dense
          autofocus
        />

        <InputsUi.Regular
          v-model="knowledgeRef.text"
          label="Text"
          type="textarea"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" @click="onDialogHide" />
      <q-btn flat label="Apply Changes" @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { InputsUi } from '@/modules/gui/inputs'

import { knowledgesDto } from '@/modules/db/knowledges'

const knowledgeTypes = Object.values(knowledgesDto.IKnowledgeTypes)

const props = defineProps<{ knowledge: knowledgesDto.IKnowledge }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const knowledgeRef = ref(props.knowledge as knowledgesDto.IKnowledge)

function onApply () {
  if (knowledgeRef.value.title) {
    onDialogOK({ appliedKnowledge: knowledgeRef.value })
  }
}

</script>
