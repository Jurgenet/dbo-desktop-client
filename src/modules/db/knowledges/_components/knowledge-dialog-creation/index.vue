<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Knowledge {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <q-select
          v-model="knowledgeRef.dto.type"
          :options="knowledgeTypes"
          :rules="[val => !!val || 'Field is required']"
          placeholder="Type"
          dense
          autofocus
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.group"
          label="Group"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.date"
          label="Date"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.title"
          label="Title"
          :rules="[(val: string) => !!val || 'Field is required']"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.platform"
          label="Platform"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.author"
          label="Author"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.lang"
          label="Lang"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.cover"
          label="Cover"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.location"
          label="Location"
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.link"
          label="Link"
        />

        <q-input
          v-model="knowledgeRef.dto.isActive"
          placeholder="isActive"
          dense
          autofocus
        />

        <q-input
          v-model="knowledgeRef.dto.isOnline"
          placeholder="isOnline"
          dense
          autofocus
        />

        <q-input
          v-model="knowledgeRef.dto.isDone"
          placeholder="isDone"
          dense
          autofocus
        />

        <InputsUi.Regular
          v-model="knowledgeRef.dto.text"
          label="Text"
          type="textarea"
        />

      <!-- TOOD: rating -->

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

import { knowledgesClasses } from '@/modules/db/knowledges'

const knowledgeTypes = Object.values(knowledgesClasses.IKnowledgeTypes)

const props = defineProps<{ isCreating: boolean, knowledge: knowledgesClasses.IKnowledge }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const knowledgeRef = ref(props.knowledge as knowledgesClasses.IKnowledge)

function onApply () {
  if (knowledgeRef.value.dto.title) {
    onDialogOK({ appliedKnowledge: knowledgeRef.value })
  }
}

</script>
