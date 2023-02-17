<template>

<div class="notesList">

  <div class="q-gutter-y-sm">

    <div class="row full-width">
      <q-toggle
        v-model="notesStore.isSearchByMarkers"
        :label="notesStore.isSearchByMarkers ? 'by Markers' : 'by Text'"
        class="q-mr-md"
      />
      <div class="col-4">
        <MarkersUi.MarkersSelector
          v-if="notesStore.isSearchByMarkers"
          :markers-ids="notesStore.searchQuery"
          no-create
          clearable
          dense
          @reselect="notesStore.searchQuery = $event"
        />
        <InputsUi.RegularInput
          v-else
          v-model="notesStore.searchQuery"
          label="search text"
        />
      </div>
      <q-btn
        label="search"
        class="q-ml-md"
        @click="notesStore.search"
      />
      <q-btn
        label="clear search"
        class="q-ml-md"
        @click="notesStore.clearSearch"
      />
    </div>

  </div>

  <div class=" q-pt-lg row justify-between">
    <PaginationUi.Actions
      v-model="notesStore.currentPage"
      :max="notesStore.lastPageNumber"
    />

    <q-input
      v-model="notesStore.filter"
      class="col-4"
      label="List Filter"
      outlined
      clearable
      dense
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

import { InputsUi } from '@/modules/gui/inputs'
import { PaginationUi } from '@/modules/core/pagination'
import { MarkersUi } from '@/modules/db/subjects/markers'
import { NotesUi, notesClasses } from '@/modules/db/subjects/notes'

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
