import { ref, computed, watch } from 'vue'

import { useLoggerStore } from '@/stores/logger'

import { dbConsts } from '@/modules/db'

const MODULE = 'api.hooks.store'

export default function useApiStore () {
  const loggerStore = useLoggerStore()

  const isProdServer = ref(true)
  const mainApiUrl = computed(() => isProdServer.value ? dbConsts.DB_API_URL : dbConsts.DB_TEST_API_URL)
  const apiEndpoints = computed(() => new Proxy(
    dbConsts.ENDPOINTS,
    { get: (target, property) => `${mainApiUrl.value}/${target[property as keyof typeof target]}` },
  ))

  watch(
    isProdServer,
    (isProd) => loggerStore.sendNotice(
      `<b>${isProd ? 'production' : 'testing'}</b> API is used as the main one (${mainApiUrl.value}).`,
      MODULE,
    ),
    { immediate: true },
  )

  return {
    isProdServer,
    serverName: computed(() => isProdServer.value ? 'live' : 'test'),
    serverColor: computed(() => isProdServer.value ? 'green' : 'blue'),
    mainApiUrl,
    apiEndpoints,
  }
}
