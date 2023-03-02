import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useMarkersStore as useMarkersStoreComposables } from '@/modules/db/subjects/markers'

const STORE_NAME = 'markers'

export const useMarkersStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const markersStore = useMarkersStoreComposables()

  markersStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => markersStore.fetchAll())

  return {
    ...markersStore,
  }
})
