import { appConsts } from '@/app'

import { useLoggerStore } from '@/stores/logger'
import { useMarkersStore } from '@/stores/markers'

import { useDbApiStore } from '@/modules/db'
import { useDrawerStore } from '@/modules/gui/drawer'
import { useAsyncState } from '@/modules/state'

const MODULE = 'app.store'

// TODO: IS-010
let store: any

function createAppStore () {
  const loggerStore = useLoggerStore()
  const dbApiStore = useDbApiStore()
  const drawerStore = useDrawerStore()
  const asyncState = useAsyncState()

  async function execute () {
    await asyncState.runTask(async () => {
      useMarkersStore()
    }, { withPreloader: true })

    loggerStore.sendNotice('initialized.', MODULE)
    asyncState.isReady.value = true
  }

  return {
    menuLinks: appConsts.MAIN_MENU_LINKS,
    routes: appConsts.ROUTES,
    ...asyncState,
    ...dbApiStore,
    ...drawerStore,
    execute,
  }
}

export default function useAppStore () {
  if (!store) {
    store = createAppStore()
    store.execute()
  }

  return store
}
