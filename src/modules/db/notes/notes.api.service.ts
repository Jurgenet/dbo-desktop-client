
import { dbApiFabrics } from '@/modules/db'
import { notesDto, notesApiRequests } from '@/modules/db/notes'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = notesApiRequests()

  return dbApiFabrics.createDocService<notesDto.INote>({ moduleName: 'notes.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
