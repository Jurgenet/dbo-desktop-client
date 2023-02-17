import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import {
  ordersDto,
  ordersClasses,
  ordersFabrics,
  ordersApiService,
} from '@/modules/db/subjects/orders'

export default function useOrdersStore () {
  const asyncState = useAsyncState()
  const apiService = ordersApiService()

  // data
  const orders: Ref<ordersClasses.IOrders[]> = ref([])
  const count = computed(() => orders.value.length)
  const ids = computed(() => orders.value.map((order) => order._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: orderList } = await apiService.fetchAll()

      orders.value = orderList.map((dto: ordersDto.IOrderDto) => ordersFabrics.create(dto))
    }, params)
  }

  async function createOne (order: ordersClasses.IOrder) {
    return asyncState.runTask(async () => {
      await apiService.createOne(order.dto)
      await fetchAll()
    })
  }

  async function updateOne (order: ordersClasses.IOrder) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(order.dto)
      await fetchAll()
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  // filters
  const filter = ref('')

  return {
    ...asyncState,
    // data
    orders,
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
