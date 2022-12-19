import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { notesDto } from '@/modules/db/notes'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<notesDto.INote>({
    endpointRef: computed(() => appStore.apiEndpoints.value.NOTES),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
