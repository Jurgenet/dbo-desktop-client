import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { markersDto } from '@/modules/db/markers'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<markersDto.IMarker>({
    endpointRef: computed(() => appStore.apiEndpoints.value.MARKERS),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}