import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { picturesDto } from '@/modules/db/subjects/pictures'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<picturesDto.IPictureDto>({
    endpointRef: computed(() => appStore.apiEndpoints.value.PICTURES),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
