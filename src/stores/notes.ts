import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useTabDynamic } from '@/modules/gui/tab'
import { useNotesStore as useNotesStoreComposables } from '@/modules/db/subjects/notes'

const STORE_NAME = 'notes'

export const useNotesStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const notesStore = useNotesStoreComposables()

  notesStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => notesStore.fetchAll())

  return {
    ...useTabDynamic(),
    ...notesStore,
  }
})
