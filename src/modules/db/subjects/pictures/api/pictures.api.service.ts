import { dbApiFabrics } from '@/modules/db'
import { picturesDto, picturesApiRequests } from '@/modules/db/subjects/pictures'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = picturesApiRequests()

  return dbApiFabrics.createDocService<picturesDto.IPicture>({ moduleName: 'pictures.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
