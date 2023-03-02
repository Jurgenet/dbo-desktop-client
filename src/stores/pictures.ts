import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { usePicturesStore as usePicturesStoreComposables } from '@/modules/db/subjects/pictures'

const STORE_NAME = 'pictures'

export const usePicturesStore = defineStore(STORE_NAME, () => {
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
