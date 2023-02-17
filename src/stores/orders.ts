import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useOrdersStore as useOrdersStoreComposables } from '@/modules/db/subjects/orders'

export const useOrdersStore = defineStore('orders', () => {
  const appStore = useAppStore()
  const ordersStore = useOrdersStoreComposables()

  ordersStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => ordersStore.fetchAll())

  return {
    ...ordersStore,
  }
})
