import { ref, Ref, computed } from 'vue'

import { selectsUtils } from '@/modules/gui/selects'
import { useAsyncState } from '@/modules/state'
import { ordersDto, ordersApiService } from '@/modules/db/orders'

export default function useOrdersStore () {
  const asyncState = useAsyncState()
  const apiService = ordersApiService()

  const docs: Ref<ordersDto.IOrders[]> = ref([])
  const filter = ref('')

  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: orders } = await apiService.fetchAll()

      docs.value = orders
    }, params)
  }

  async function createOne (orders: ordersDto.IOrders) {
    return asyncState.runTask(async () => {
      await apiService.createOne(orders)
      await fetchAll()
    })
  }

  async function updateOne (orders: ordersDto.IOrders) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(orders)
      await fetchAll()
    })
  }

  async function removeOne (_id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(_id)
      await fetchAll()
    })
  }

  function getDocsOptionsByTitles (docIds: string[]) {
    return selectsUtils.getOptionsByTitles(docs.value, docIds)
  }

  return {
    ...asyncState,
    docs,
    filter,
    count: computed(() => docs.value.length),
    getDocsOptionsByTitles,
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
