import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useTabsDynamic } from '@/modules/gui/tabs'
import { useNotesStore as useNotesStoreComposables } from '@/modules/db/subjects/notes'

export const useNotesStore = defineStore('notes', () => {
  const appStore = useAppStore()
  const notesStore = useNotesStoreComposables()

  notesStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => notesStore.fetchAll())

  return {
    ...useTabsDynamic(),
    ...notesStore,
  }
})
