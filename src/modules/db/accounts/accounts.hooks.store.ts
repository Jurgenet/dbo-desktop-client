import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import { accountsDto, accountsApiService } from '@/modules/db/accounts'

export default function useAccountsStore () {
  const apiService = accountsApiService()
  const asyncState = useAsyncState()

  const docs: Ref<accountsDto.IAccount[]> = ref([])
  const filter = ref('')

  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: accounts } = await apiService.fetchAll()

      docs.value = accounts
    }, params)
  }

  async function createOne (account: accountsDto.IAccount) {
    return asyncState.runTask(async () => {
      await apiService.createOne(account)
      await fetchAll()
    })
  }

  async function updateOne (account: accountsDto.IAccount) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(account)
      await fetchAll()
    })
  }

  async function removeOne (_id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(_id)
      await fetchAll()
    })
  }

  return {
    ...asyncState,
    docs,
    filter,
    count: computed(() => docs.value.length),
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
