import { ref, Ref, computed } from 'vue'

import { selectsUtils } from '@/modules/gui/selects'
import { useAsyncState } from '@/modules/state'
import { markersDto, markersApiService } from '@/modules/db/markers'

export default function useMarkersStore () {
  const asyncState = useAsyncState()
  const apiService = markersApiService()

  const docs: Ref<markersDto.IMarker[]> = ref([])
  const filter = ref('')

  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: markers } = await apiService.fetchAll()

      docs.value = markers
    }, params)
  }

  async function createOne (marker: markersDto.IMarker) {
    return asyncState.runTask(async () => {
      await apiService.createOne(marker)
      await fetchAll()
    })
  }

  async function updateOne (marker: markersDto.IMarker) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(marker)
      await fetchAll()
    })
  }

  async function removeOne (_id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(_id)
      await fetchAll()
    })
  }

  function getDocsOptionsByTitles (docIds: string[]) {
    return selectsUtils.getOptionsByTitles(docs.value, docIds)
  }

  return {
    ...asyncState,
    docs,
    filter,
    count: computed(() => docs.value.length),
    getDocsOptionsByTitles,
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
