import { ref, computed } from 'vue'

import { dateTimeParsers } from '@/modules/core/date-time'

export default function useDateTimeClock (interval = 1000) {
  const now = ref(new Date())

  function update () {
    now.value = new Date()
  }

  setInterval(() => update(), interval)

  return {
    now: computed(() => dateTimeParsers.parseDate(now.value)),
  }
}
