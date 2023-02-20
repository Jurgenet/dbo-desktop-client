import { ref, computed, watch } from 'vue'

import { useLoggerStore } from '@/stores/logger'

import { dbConsts } from '@/modules/db'

const MODULE = 'api.hooks.store'

export default function useApiStore () {
  const loggerStore = useLoggerStore()

  const isProdServer = ref(true)
  const apiUrl = computed(() => isProdServer.value ? dbConsts.API_URL : dbConsts.DEV_API_URL)
  const filesUploadUrl = computed(() => isProdServer.value ? dbConsts.FILES_UPLOAD_URL : dbConsts.DEV_FILES_UPLOAD_URL)
  const filesStaticUrl = computed(() => isProdServer.value ? dbConsts.FILES_STATIC_URL : dbConsts.DEV_FILES_STATIC_URL)
  const apiEndpoints = computed(() => new Proxy(
    dbConsts.ENDPOINTS,
    { get: (target, property) => `${apiUrl.value}/${target[property as keyof typeof target]}` },
  ))

  watch(
    isProdServer,
    (isProd) => loggerStore.sendNotice(
      `<b>${isProd ? 'production' : 'develop'}</b> API is used as the main one (${apiUrl.value}).`,
      MODULE,
    ),
    { immediate: true },
  )

  return {
    isProdServer,
    serverType: computed(() => isProdServer.value ? dbConsts.SERVER_TYPE.live : dbConsts.SERVER_TYPE.dev),
    apiUrl,
    filesUploadUrl,
    filesStaticUrl,
    apiEndpoints,
  }
}
