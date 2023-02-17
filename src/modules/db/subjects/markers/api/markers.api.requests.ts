import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { markersDto } from '@/modules/db/subjects/markers'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<markersDto.IMarkerDto>({
    endpointRef: computed(() => appStore.apiEndpoints.value.MARKERS),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
