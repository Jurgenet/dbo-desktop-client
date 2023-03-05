<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Knowledge {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputUi.Input
          v-model="knowledgeRef.dto.title"
          label="Title"
          :rules="[(val: string) => !!val || 'Field is required']"
        />

        <ExpansionUi.Expansion label="Main Data" :isOpened="true">
          <div class="column q-gutter-sm">

            <q-select
              v-model="knowledgeRef.dto.type"
              :options="knowledgeTypes"
              placeholder="Type"
              dense
              autofocus
              outlined
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.group"
              label="Group"
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.date"
              label="Date"
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.platform"
              label="Platform"
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.author"
              label="Author"
            />

            <q-select
              v-model="knowledgeRef.dto.lang"
              :options="knowledgeLangs"
              label="Lang"
              outlined
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.cover"
              label="Cover"
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.location"
              label="Location"
            />

            <InputUi.Input
              v-model="knowledgeRef.dto.link"
              label="Link"
            />

            <div class="q-pa-sm row justify-around items-center">
              <q-toggle v-model="knowledgeRef.dto.isActive" label="Active" left-label />
              <q-toggle v-model="knowledgeRef.dto.isOnline" label="OnLine" left-label />
              <q-toggle v-model="knowledgeRef.dto.isDone" label="Done" left-label />
              <RatingsUi.RegularRating v-model="knowledgeRef.dto.rating" size="3.5em" />
            </div>

          </div>
        </expansionUi.Expansion>

        <ExpansionUi.Expansion label="Content Data">
          <EditorsUi.TextEditor v-model="knowledgeRef.dto.text" />
        </expansionUi.Expansion>

      <!-- TOOD: rating -->

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
import { ExpansionUi } from '@/modules/gui/expansion'
import { InputUi } from '@/modules/gui/input'
import { EditorsUi } from '@/modules/gui/editors'
import { RatingsUi } from '@/modules/gui/ratings'

import { knowledgesClasses } from '@/modules/db/subjects/knowledges'

const knowledgeTypes = Object.values(knowledgesClasses.IKnowledgeTypes)
const knowledgeLangs = Object.values(knowledgesClasses.IKnowledgeLangs)

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
