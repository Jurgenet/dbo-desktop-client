import { dbApiFabrics } from '@/modules/db'
import { markersDto, markersApiRequests } from '@/modules/db/markers'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = markersApiRequests()

  return dbApiFabrics.createDocService<markersDto.IMarkerDto>({ moduleName: 'markers.api.service', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
