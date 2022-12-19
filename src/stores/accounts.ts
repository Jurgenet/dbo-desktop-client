import { watch } from 'vue'
import { defineStore } from 'pinia'

import useAppStore from '@/stores/app'

import { useAccountsStore as useAccountsStoreComposables } from '@/modules/db/accounts'

export const useAccountsStore = defineStore('accounts', () => {
  const appStore = useAppStore()
  const accountsStore = useAccountsStoreComposables()

  accountsStore.fetchAll()

  watch(() => appStore.isProdServer.value, () => accountsStore.fetchAll())

  return {
    ...accountsStore,
  }
})
