import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { ordersDto } from '@/modules/db/subjects/orders'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<ordersDto.IOrders>({
    endpointRef: computed(() => appStore.apiEndpoints.value.ORDERS),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
