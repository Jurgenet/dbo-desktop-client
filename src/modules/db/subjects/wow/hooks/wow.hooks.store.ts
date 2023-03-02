import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import {
  wowDto,
  wowClasses,
  wowFabrics,
  wowApiService,
} from '@/modules/db/subjects/wow'

export default function useWowStore () {
  const apiService = wowApiService()
  const asyncState = useAsyncState()

  // data
  const subjects: Ref<wowClasses.ISubject[]> = ref([])
  const count = computed(() => subjects.value.length)

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: subjectList } = await apiService.fetchAll()

      subjects.value = subjectList.map((dto: wowDto.ISubjectDto) => wowFabrics.create(dto))
    }, params)
  }

  async function createOne (subject: wowClasses.ISubject) {
    return asyncState.runTask(async () => {
      await apiService.createOne(subject.dto)
      await fetchAll()
    })
  }

  async function updateOne (subject: wowClasses.ISubject) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(subject.dto)
      await fetchAll()
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  // filter
  const filter = ref('')

  return {
    ...asyncState,
    // data
    subjects,
    count,
    // filters
    filter,
    // crud
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
