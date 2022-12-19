<template>

<q-page class="column">
  <div class="full-width">

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

      <TabsUi.DynamicTab
        v-for="tab in notesStore.tabs" :key="tab.name"
        :name="tab.name"
        :label="tab.data.title ?? tab.label"
        :is-alert="tab.isAlert"
        @remove="notesStore.removeTab(tab)"
      />

      <!-- <q-btn
        class="q-ml-sm"
        icon="add"
        color="white"
        text-color="black"
        size="8px"
        dense
      /> -->

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

  </div>

  <PreloadersUi.Regular :is-visible="notesStore.isBusy" />
</q-page>

</template>

<script setup lang="ts">

import { useNotesStore } from '@/stores/notes'

import { TabsUi } from '@/modules/gui/tabs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { NotesUi, notesDto } from '@/modules/db/notes'

const notesStore = useNotesStore()

function onOpenTab (note: notesDto.INote, isInBackground: boolean) {
  notesStore.createTab(note.title, note, isInBackground)
}

</script>

<style lang="sass">

.stickyTabs
  position: sticky
  top: 50px
  z-index: 2
  background: white

</style>
