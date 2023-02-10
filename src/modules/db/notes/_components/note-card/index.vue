<template>

<div class="noteCard">

  <div class="q-py-md row items-center q-gutter-sm">
    <MarkersUi.MarkersBadgeList :markers-ids="note.dto.markers" />
  </div>

  <div class="q-py-md text-h4">{{ note.dto.title }}</div>

  <div class="contentWrapper">

    <div v-if="state.isEditing" class="q-gutter-y-md">
      <div class="col q-gutter-y-md">

        <q-input v-model="state.title" label="title" outlined />

        <MarkersUi.MarkersSelector :markers-ids="state.markers" @reselect="state.markers = $event" />

        <ExpansionsUi.ExpansionList>
        <ExpansionsUi.RegularExpansion label="Links">
          <NotesUi.NoteLinksEditor :links="state.links" @change="state.links = $event" />
        </ExpansionsUi.RegularExpansion>
      </ExpansionsUi.ExpansionList>

        <q-input
          v-model="state.text"
          type="textarea"
          class="textarea"
          label="text"
          outlined
        />

      </div>

    </div>

    <div v-else class="column q-mt-md">

      <ExpansionsUi.ExpansionList>
        <ExpansionsUi.RegularExpansion label="Links" dense>
          <NotesUi.NoteLinksView :links="note.dto.links" />
        </ExpansionsUi.RegularExpansion>
      </ExpansionsUi.ExpansionList>

      <vue3-markdown-it :source='note.dto.text' />
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

import ActionControls from './action-controls/index.vue'

import { useNotesStore } from '@/stores/notes'

import { tabsDto } from '@/modules/gui/tabs'
import { ExpansionsUi } from '@/modules/gui/expansions'
import { MarkersUi } from '@/modules/db/markers'
import { NotesUi, notesClasses, notesFabrics, notesApiService } from '@/modules/db/notes'

const props = defineProps<{
  tab: tabsDto.ITab
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'exit'): void
}>()

const noteStore = useNotesStore()
const apiService = notesApiService()

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

const note: notesClasses.INote = ref(props.tab.data)

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

// loading status at saving !!!
async function onRefresh () {
  try {
    const { doc } = await apiService.fetchOne(note.value._id)

    note.value = notesFabrics.create(doc)

    clearState()
  } catch (error) {
    console.log(error)
  }
}

function clearState () {
  state.title = note.value.dto.title
  state.links = note.value.dto.links
  state.text = note.value.dto.text
  state.markers = note.value.dto.markers
}

function syncNoteFromState () {
  note.value.dto.title = state.title
  note.value.dto.links = state.links
  note.value.dto.text = state.text
  note.value.dto.markers = state.markers
}

async function saveNote () {
  try {
    await noteStore.updateOne({
      dto: {
        ...note.value.dto,
        title: state.title,
        links: state.links,
        text: state.text,
        markers: state.markers,
      },
    })

    syncNoteFromState()
    noteStore.updateTab({ tab: props.tab, label: note.value.dto.title })
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
  bottom: 137px
  border-top: 1px dashed $grey-4
  width: 100%

  background: white

</style>
