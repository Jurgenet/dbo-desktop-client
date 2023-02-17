import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { knowledgesDto } from '@/modules/db/subjects/knowledges'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<knowledgesDto.IKnowledge>({
    endpointRef: computed(() => appStore.apiEndpoints.value.KNOWLEDGES),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
