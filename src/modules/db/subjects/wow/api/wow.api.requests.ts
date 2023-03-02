import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { wowDto } from '@/modules/db/subjects/wow'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<wowDto.ISubject>({
    endpointRef: computed(() => appStore.apiEndpoints.value.WOW),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
