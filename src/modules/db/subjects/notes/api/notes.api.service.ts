
import { dbApiFabrics } from '@/modules/db'
import { notesClasses, notesApiRequests } from '@/modules/db/subjects/notes'

// TODO: IS-010
let service: any

function createService () {
  const apiRequests = notesApiRequests()

  return dbApiFabrics.createDocService<notesClasses.INote>({ moduleName: 'notes.api.utils', apiRequests })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
