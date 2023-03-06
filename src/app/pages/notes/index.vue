<template>

<PageUi.Page no-padding>

  <q-tabs
    v-model="notesStore.activeTab"
    class="shadow-2 stickyTabs"
    align="left"
    indicator-color="primary"
    inline-label
    outside-arrows
    dense
    narrow-indicator
    no-caps
  >

    <q-tab name="root" label="manager" />

    <TabUi.DynamicTab
      v-for="tab in notesStore.tabs" :key="tab.name"
      :name="tab.name"
      :label="tab.data.title ?? tab.label"
      :is-alert="tab.isAlert"
      @remove="notesStore.removeTab(tab)"
    />

  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="notesStore.activeTab" animated keep-alive>
    <q-tab-panel name="root">
      <NotesUi.MainTabPanel @open="onOpenTab" />
    </q-tab-panel>
    <q-tab-panel v-for="tab in notesStore.tabs" :key="tab.name" :name="tab.name">
      <NotesUi.NoteCard :tab="tab" />
    </q-tab-panel>
  </q-tab-panels>

  <PreloaderUi.Preloader :is-visible="notesStore.isBusy" />

</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'NotesPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { useNotesStore } from '@/stores/notes'

import { PageUi } from '@/modules/gui/page'
import { TabUi } from '@/modules/gui/tab'
import { PreloaderUi } from '@/modules/gui/preloader'
import { NotesUi, notesClasses } from '@/modules/db/subjects/notes'

const notesStore = useNotesStore()

function onOpenTab (note: notesClasses.INote, isInBackground: boolean) {
  notesStore.createTab(note.dto.title, note, isInBackground)
}

</script>

<style lang="sass">

.stickyTabs
  position: sticky
  top: 50px
  z-index: 2
  background: white

</style>
