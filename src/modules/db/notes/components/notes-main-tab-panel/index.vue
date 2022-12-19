<template>

<q-splitter v-model="splitter">

  <template v-slot:before>
    <q-tabs v-model="activeTab" class="text-primary" vertical>
      <q-tab name="search" icon="search" label="Search" />
      <q-tab name="manage" icon="build" label="Manage" />
    </q-tabs>
  </template>

  <template v-slot:after>
      <q-tab-panels
        v-model="activeTab"
        transition-prev="jump-up"
        transition-next="jump-up"
        animated
        swipeable
        vertical
        keep-alive
      >

      <q-tab-panel name="search" keep-alive>
        <NotesUi.NotesList
          @open="onOpenTab"
          @pin="onPinTab"
        />
      </q-tab-panel>

      <q-tab-panel name="manage">
        <q-list class="rounded-borders" bordered>
          <q-expansion-item icon="add_circle" label="Creating" header-class="text-blue">
            <q-card>
              <q-card-section class="q-gutter-sm">
                <ButtonsUi.TypedButton :type="ButtonsUi.TypedButtonType.Create" @click="onCreateNote" />
                <q-toggle v-model="isOpenAfterCreating" label="open after creating" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      </q-tab-panels>
  </template>

</q-splitter>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { useNotesStore } from '@/stores/notes'

import { ButtonsUi } from '@/modules/gui/buttons'
import { NotesUi, notesDto } from '@/modules/db/notes'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'open', note: notesDto.INote, isInBackground: boolean): void
}>()

const notesStore = useNotesStore()

const splitter = ref(8)
const activeTab = ref('search')
const isOpenAfterCreating = ref(true)

function onOpenTab (note: notesDto.INote, isInBackground: boolean) {
  emits('open', note, isInBackground)
}

function onPinTab (note: notesDto.INote) {
  notesStore.updateOne({ _id: note._id, isPinned: note.isPinned === 'true' ? 'false' : 'true' })
}

async function onCreateNote () {
  const { doc, message } = await notesStore.createOne()

  console.log(message)

  if (doc._id && isOpenAfterCreating.value) {
    emits('open', doc, false)
  }
}

</script>
