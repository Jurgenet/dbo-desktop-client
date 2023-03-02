import { defineStore } from 'pinia'

import { useloggerStore } from '@/modules/core/logger'

const STORE_NAME = 'logger'

const loggerStore = useloggerStore({ moduleName: `${STORE_NAME}.store` })

loggerStore.sendNotice('initialized.')

export const useLoggerStore = defineStore(STORE_NAME, () => loggerStore)
