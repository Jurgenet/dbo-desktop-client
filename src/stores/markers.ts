import { ref, Ref, watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useMarkersStore as useMarkersStoreComposables } from '@/modules/db/markers'

export const useMarkersStore = defineStore('markers', () => {
  const appStore = useAppStore()
  const markersStore = useMarkersStoreComposables()

  const stylesBuffer: Ref<null | { textColor: string, bgColor: string }> = ref(null)

  markersStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => markersStore.fetchAll())

  function copyToStylesBuffer (styles: { textColor: string, bgColor: string }) {
    stylesBuffer.value = styles
  }

  return {
    ...markersStore,
    stylesBuffer,
    copyToStylesBuffer,
  }
})
