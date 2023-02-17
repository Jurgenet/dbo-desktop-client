import { dbApiFabrics } from '@/modules/db'
import { ordersDto, ordersApiRequests } from '@/modules/db/subjects/orders'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = ordersApiRequests()

  return dbApiFabrics.createDocService<ordersDto.IOrder>({ moduleName: 'orders.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
