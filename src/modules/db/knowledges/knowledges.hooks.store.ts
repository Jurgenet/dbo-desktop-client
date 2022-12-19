import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import { knowledgesDto, knowledgesApiService } from '@/modules/db/knowledges'

export default function useKnowledgesStore () {
  const apiService = knowledgesApiService()
  const asyncState = useAsyncState()

  const docs: Ref<knowledgesDto.IKnowledge[]> = ref([])
  const filter = ref('')

  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: knowledges } = await apiService.fetchAll()

      docs.value = knowledges
    }, params)
  }

  async function createOne (knowledge: knowledgesDto.IKnowledge) {
    return asyncState.runTask(async () => {
      await apiService.createOne(knowledge)
      await fetchAll()
    })
  }

  async function updateOne (knowledge: knowledgesDto.IKnowledge) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(knowledge)
      await fetchAll()
    })
  }

  async function removeOne (_id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(_id)
      await fetchAll()
    })
  }

  return {
    ...asyncState,
    docs,
    filter,
    count: computed(() => docs.value.length),
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
