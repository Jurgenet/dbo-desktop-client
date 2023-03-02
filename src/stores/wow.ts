import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useWowStore as useWowStoreComposables } from '@/modules/db/subjects/wow'

const STORE_NAME = 'wow'

export const useWowStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const store = useWowStoreComposables()

  store.fetchAll()

  watch(() => appStore.isProdServer.value, () => {
    store.fetchAll()
  })

  return {
    ...store,
  }
})
