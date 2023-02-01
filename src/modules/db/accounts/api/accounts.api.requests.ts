import { computed } from 'vue'

import useAppStore from '@/stores/app'

import { dbApiFabrics } from '@/modules/db'
import { accountsDto } from '@/modules/db/accounts'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  return dbApiFabrics.createDocRequests<accountsDto.IAccount>({
    endpointRef: computed(() => appStore.apiEndpoints.value.ACCOUNTS),
  })
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
