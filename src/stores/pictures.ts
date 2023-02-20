import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { usePicturesStore as usePicturesStoreComposables } from '@/modules/db/subjects/pictures'

export const usePicturesStore = defineStore('pictures', () => {
  const appStore = useAppStore()
  const picturesStore = usePicturesStoreComposables()

  picturesStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => {
    picturesStore.clear()
    picturesStore.fetchAll()
  })

  return {
    ...picturesStore,
  }
})
