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
          @open="onOpenNote"
          @pin="onPinNote"
        />
      </q-tab-panel>

      <q-tab-panel name="manage">
        <q-list class="rounded-borders" bordered>
          <q-expansion-item icon="add_circle" label="Creating" header-class="text-blue">
            <q-card>
              <q-card-section class="q-gutter-sm">
                <ButtonUi.ButtonCreate @click="onCreateNote" />
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

import { ButtonUi } from '@/modules/gui/button'
import { NotesUi, notesClasses } from '@/modules/db/subjects/notes'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'open', note: notesClasses.INote, isInBackground: boolean): void
}>()

const notesStore = useNotesStore()

const splitter = ref(8)
const activeTab = ref('search')
const isOpenAfterCreating = ref(true)

function onOpenNote (note: notesClasses.INote, isInBackground: boolean) {
  emits('open', note, isInBackground)
}

async function onPinNote (note: notesClasses.INote) {
  note.dto.isPinned = !note.dto.isPinned
  await notesStore.updateOne(note, { noFetching: true })
  notesStore.search()
}

async function onCreateNote () {
  const note: notesClasses.Inote = await notesStore.createOne()

  if (isOpenAfterCreating.value) {
    emits('open', note, false)
  }
}

</script>
