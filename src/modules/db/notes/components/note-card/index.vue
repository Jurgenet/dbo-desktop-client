<template>

<div class="noteCard">

  <div class="q-py-md row items-center q-gutter-sm">
    <MarkersUi.MarkersBadgeList :markers-ids="note.markers" />
  </div>

  <div class="q-py-md text-h4">{{ note.title }}</div>

  <div class="contentWrapper">

    <div v-if="state.isEditing" class="q-gutter-y-md">
      <div class="col q-gutter-y-md">

        <q-input v-model="state.title" label="title" outlined />

        <MarkersUi.MarkersSelector :markers-titles="state.markers" @reselect="state.markers = $event" />

        <NotesUi.NoteLinksEditor :links="state.links" @change="state.links = $event" />

        <q-input
          v-model="state.text"
          type="textarea"
          class="textarea"
          label="text"
          outlined
        />

      </div>

    </div>

    <div v-else class="column q-gutter-y-md">
      <NotesUi.NoteLinksView :links="note.links" />
      <vue3-markdown-it :source='note.text' />
    </div>

  </div>

</div>

<ActionControls
  :is-editing="state.isEditing"
  class="actionControls"
  @exit="emits('exit')"
  @toggle-edit="onToggleEdit"
  @cancel-edit="onCancelEditing"
  @refresh="onRefresh"
/>

</template>

<script setup lang="ts">

import { ref, reactive, watch } from 'vue'

import ActionControls from './action-controls.vue'

import { useNotesStore } from '@/stores/notes'

import { tabsDto } from '@/modules/gui/tabs'
import { MarkersUi } from '@/modules/db/markers'
import { NotesUi, notesDto, notesApiService } from '@/modules/db/notes'

const props = defineProps<{
  tab: tabsDto.ITab
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'exit'): void
}>()

const noteStore = useNotesStore()

interface IState {
  isEditing: boolean
  title: string
  links: string[]
  text: string
  markers: string[]
}

const state: IState = reactive({
  isEditing: false,
  title: '',
  markers: [],
  links: [],
  text: '',
})

const note: notesDto.INote = ref(props.tab.data)

watch(() => state.isEditing, (isEdit: boolean) => noteStore.setTabAlert(props.tab.name, isEdit))

async function onToggleEdit () {
  if (state.isEditing) {
    await saveNote()
  }

  state.isEditing = !state.isEditing
  clearState()
}

function onCancelEditing () {
  clearState()

  state.isEditing = false
}

// loading status as in save !!!
async function onRefresh () {
  try {
    const { doc } = await notesApiService.fetchOne(note.value._id)

    note.value = doc

    clearState()
  } catch (error) {
    console.log(error)
  }
}

function clearState () {
  state.title = note.value.title
  state.links = note.value.links
  state.text = note.value.text
  state.markers = note.value.markers
}

function syncNoteFromState () {
  note.value.title = state.title
  note.value.links = state.links
  note.value.text = state.text
  note.value.markers = state.markers
}

async function saveNote () {
  try {
    await noteStore.updateOne({
      ...note.value,
      title: state.title,
      links: state.links,
      text: state.text,
      markers: state.markers,
    })

    syncNoteFromState()
  } catch (error) {
    console.log(error)
  }
}

</script>

<style lang="sass">

.textarea .q-field__native
  height: 48vh

</style>

<style lang="sass" scoped>

.noteCard
  padding-bottom: 60px

.contentWrapper
  border-top: 1px solid $grey-4

.actionControls
  position: fixed
  bottom: 144px
  border-top: 1px dashed $grey-4
  width: 100%

  background: white

</style>
