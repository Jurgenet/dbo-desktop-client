import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useKnowledgesStore as useKnowledgesStoreComposables } from '@/modules/db/knowledges'

export const useKnowledgesStore = defineStore('knowledges', () => {
  const appStore = useAppStore()
  const knowledgesStore = useKnowledgesStoreComposables()

  knowledgesStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => knowledgesStore.fetchAll())

  return {
    ...knowledgesStore,
  }
})
