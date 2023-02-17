import { dbApiFabrics } from '@/modules/db'
import { knowledgesDto, knowledgesApiRequests } from '@/modules/db/subjects/knowledges'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = knowledgesApiRequests()

  return dbApiFabrics.createDocService<knowledgesDto.IKnowledge>({ moduleName: 'knowledges.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
