import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import {
  accountsDto,
  accountsClasses,
  accountsFabrics,
  accountsApiService,
} from '@/modules/db/accounts'

export default function useAccountsStore () {
  const apiService = accountsApiService()
  const asyncState = useAsyncState()

  // data
  const accounts: Ref<accountsClasses.IAccount[]> = ref([])
  const count = computed(() => accounts.value.length)
  const ids = computed(() => accounts.value.map((account) => account._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: accountList } = await apiService.fetchAll()

      accounts.value = accountList.map((dto: accountsDto.IAccountDto) => accountsFabrics.create(dto))
    }, params)
  }

  async function createOne (account: accountsClasses.IAccount) {
    return asyncState.runTask(async () => {
      await apiService.createOne(account.dto)
      await fetchAll()
    })
  }

  async function updateOne (account: accountsClasses.IAccount) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(account.dto)
      await fetchAll()
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  // filter
  const filter = ref('')

  return {
    ...asyncState,
    // data
    accounts,
    count,
    ids,
    // filters
    filter,
    // crud
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
