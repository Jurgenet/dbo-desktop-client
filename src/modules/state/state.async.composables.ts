import { ref } from 'vue'
import { Loading, QSpinnerGears } from 'quasar'

export default function useInit () {
  const isReady = ref(false)
  const isBusy = ref(false)

  async function runTask (task: () => unknown, { withPreloader = false } = {}): Promise<unknown> {
    if (withPreloader) {
      Loading.show({ spinner: QSpinnerGears })
    }

    isBusy.value = true
    const result = await task()
    isBusy.value = false

    if (withPreloader) {
      Loading.hide()
    }

    return result
  }

  return {
    isReady,
    isBusy,
    runTask,
  }
}
