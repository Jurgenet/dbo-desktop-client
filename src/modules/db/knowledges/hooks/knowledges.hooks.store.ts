import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import {
  knowledgesDto,
  knowledgesClasses,
  knowledgesFabrics,
  knowledgesApiService,
} from '@/modules/db/knowledges'

export default function useKnowledgesStore () {
  const apiService = knowledgesApiService()
  const asyncState = useAsyncState()

  // data
  const knowledges: Ref<knowledgesClasses.IKnowledge[]> = ref([])
  const count = computed(() => knowledges.value.length)
  const ids = computed(() => knowledges.value.map((knowledge) => knowledge._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: knowledgeList } = await apiService.fetchAll()

      knowledges.value = knowledgeList.map((dto: knowledgesDto.IKnowledgeDto) => knowledgesFabrics.create(dto))
    }, params)
  }

  async function createOne (knowledge: knowledgesClasses.IKnowledge) {
    return asyncState.runTask(async () => {
      await apiService.createOne(knowledge.dto)
      await fetchAll()
    })
  }

  async function updateOne (knowledge: knowledgesClasses.IKnowledge) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(knowledge.dto)
      await fetchAll()
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  // filters
  const filter = ref('')

  return {
    ...asyncState,
    // data
    knowledges,
    count,
    ids,
    // filters
    filter,
    // crud
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
