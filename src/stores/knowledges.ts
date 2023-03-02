import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useKnowledgesStore as useKnowledgesStoreComposables } from '@/modules/db/subjects/knowledges'

const STORE_NAME = 'knowledges'

export const useKnowledgesStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const knowledgesStore = useKnowledgesStoreComposables()

  knowledgesStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => knowledgesStore.fetchAll())

  return {
    ...knowledgesStore,
  }
})
