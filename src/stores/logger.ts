import { defineStore } from 'pinia'

import { useloggerStore } from '@/modules/core/logger'

const loggerStore = useloggerStore({ moduleName: 'logger.store' })

loggerStore.sendNotice('initialized.')

export const useLoggerStore = defineStore('logger', () => loggerStore)
