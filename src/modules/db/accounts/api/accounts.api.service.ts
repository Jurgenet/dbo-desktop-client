import { dbApiFabrics } from '@/modules/db'
import { accountsDto, accountsApiRequests } from '@/modules/db/accounts'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = accountsApiRequests()

  return dbApiFabrics.createDocService<accountsDto.IAccount>({ moduleName: 'accounts.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
