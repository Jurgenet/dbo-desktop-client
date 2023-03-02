import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useOrdersStore as useOrdersStoreComposables } from '@/modules/db/subjects/orders'

const STORE_NAME = 'orders'

export const useOrdersStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const ordersStore = useOrdersStoreComposables()

  ordersStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => ordersStore.fetchAll())

  return {
    ...ordersStore,
  }
})
