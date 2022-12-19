import { ref, Ref, computed, watch } from 'vue'
import { Loading, QSpinnerGears } from 'quasar'

import { debugUtils } from '@/modules/core/debug'

interface IParams {
  isDebug?: boolean
  debugLabel?: string
}

// FIXME: move loading to composables

export default function useInitialization (params: IParams = {}) {
  const isDebug = ref(false)
  const debugLabel = ref('')
  const isInit = ref(false)
  const taskPool: Ref<Set<number>> = ref(new Set())

  const isBusy = computed(() => taskPool.value.size !== 0)

  function log (message: string) {
    if ((isDebug.value)) debugUtils.conLog(`${debugLabel.value} :: ${message}`)
  }

  async function init () {
    log('start init')

    // @@debug
    // await debugUtils.delay(2000)

    isInit.value = true

    log('inited')
  }

  function toggleTaskInPool (taskUid: number) {
    taskPool.value.has(taskUid)
      ? taskPool.value.delete(taskUid)
      : taskPool.value.add(taskUid)
  }

  async function addTask<T> (asyncTask: () => T, description = 'unknown task'): Promise<T> {
    const taskUid = Math.random()

    Loading.show({
      spinner: QSpinnerGears,
    })

    toggleTaskInPool(taskUid)
    log(`Added task in taskpool (${taskUid} :: ${description})`)

    const result = await asyncTask()

    toggleTaskInPool(taskUid)
    log(`Removed task from taskpool (${taskUid} :: ${description})`)

    Loading.hide()

    return result
  }

  if (params.isDebug) {
    isDebug.value = params.isDebug ?? false
    debugLabel.value = params.debugLabel ?? 'unknown consumer'

    watch(isInit, (newValue, oldValue) => log(`isInit changed: ${oldValue} -> ${newValue}`))
    watch(isBusy, (newValue, oldValue) => log(`isBusy changed: ${oldValue} -> ${newValue}`),
    )
  }

  log('called')

  if (!isInit.value && !isBusy.value) {
    addTask(init, 'initialization')
  }

  return {
    isInit: computed(() => isInit.value),
    isBusy,
    addTask,
  }
}
