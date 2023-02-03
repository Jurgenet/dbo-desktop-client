<template>

<div class="notesList">

  <div class="q-gutter-y-sm">

    <div class="row no-wrap queryMarkers">
      <MarkersUi.MarkersSelector
        :markers-ids="notesStore.queryMarkers"
        no-create
        clearable
        dense
        @reselect="notesStore.queryMarkers = $event"
      />
      <q-btn
        label="search"
        class="q-ml-md"
        @click="notesStore.fetchAll"
      />
    </div>

    <q-input
      v-model="notesStore.filter"
      class="col"
      label="Title Filter"
      outlined
      clearable
      dense
    />

  </div>

  <div class="q-pa-md flex flex-center">
    <PaginationUi.Actions
      v-model="notesStore.currentPage"
      :max="notesStore.lastPageNumber"
    />
  </div>

  <div class="q-mt-md">

    <div v-if="notesStore.paginatedElements.length > 0">

      <div class="content q-mt-md q-gutter-sm">
        <div v-for="note in notesStore.paginatedElements" :key="note._id" class="row items-start">
          <NotesUi.NotePreview
           :note="note"
           class="col"
           @open="onOpenNote"
           @pin="emits('pin', $event)"
          />
        </div>
      </div>

    </div>

    <div class="column flex-center" v-else>
      <div class="q-mt-xl text-h6">Not Found</div>
    </div>

  </div>

</div>

</template>

<script setup lang="ts">

import { useNotesStore } from '@/stores/notes'

import { PaginationUi } from '@/modules/core/pagination'
import { MarkersUi } from '@/modules/db/markers'
import { NotesUi, notesClasses } from '@/modules/db/notes'

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'open', note: notesClasses.INote, inBackground: boolean): void
  (e: 'pin', note: notesClasses.INote): void
}>()

function onOpenNote (note: notesClasses.INote, isInBackground: boolean) {
  emits('open', note, isInBackground)
}

const notesStore = useNotesStore()

</script>

<style lang="sass">

.queryMarkers
  .markersSelector
    width: 100%

</style>
