
import { dbApiFabrics } from '@/modules/db'
import { wowClasses, wowApiRequests } from '@/modules/db/subjects/wow'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = wowApiRequests()

  return dbApiFabrics.createDocService<wowClasses.ISubject>({ moduleName: 'wow.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
