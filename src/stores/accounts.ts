import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useAccountsStore as useAccountsStoreComposables } from '@/modules/db/subjects/accounts'

const STORE_NAME = 'accounts'

export const useAccountsStore = defineStore(STORE_NAME, () => {
  const appStore = useAppStore()
  const accountsStore = useAccountsStoreComposables()

  accountsStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => accountsStore.fetchAll())

  return {
    ...accountsStore,
  }
})
