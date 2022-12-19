import axios from 'axios'

import { computed } from 'vue'

import useAppStore from '@/stores/app'

// TODO: IS-010
let service: any

function createService () {
  const appStore = useAppStore()

  const endpoint = computed(() => appStore.apiEndpoints.value.SYSTEM)

  function ping () {
    return axios.get(`${endpoint.value}/ping`)
  }

  function backup () {
    return axios.get(`${endpoint.value}/backup`)
  }

  return {
    ping,
    backup,
  }
}

export default function () {
  if (!service) {
    service = createService()
  }

  return service
}
