import { ref, computed, watch } from 'vue'

import { useLoggerStore } from '@/stores/logger'

import { dbApiConsts } from '@/modules/db'

const MODULE = 'api.hooks.store'

export default function useApiStore () {
  const loggerStore = useLoggerStore()

  const isProdServer = ref(true)
  const mainApiUrl = computed(() => isProdServer.value ? dbApiConsts.DB_API_URL : dbApiConsts.DB_TEST_API_URL)
  const apiEndpoints = computed(() => new Proxy(
    dbApiConsts.ENDPOINTS,
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
