import { ref, Ref, computed } from 'vue'

import { selectsUtils } from '@/modules/gui/selects'
import { useAsyncState } from '@/modules/state'
import { usePagination } from '@/modules/core/pagination'
import { notesDto, notesApiService } from '@/modules/db/notes'

const ELEMENTS_PER_PAGE = 14

export default function useNotesStore () {
  const apiService = notesApiService()
  const asyncState = useAsyncState()

  const docs: Ref<notesDto.INote[]> = ref([])
  const queryMarkers = ref([])
  const listFilter = ref('')

  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: notes } = await apiService.fetchAll()

      docs.value = notes
    }, params)
  }

  async function createOne (doc: notesDto.INote) {
    return asyncState.runTask(async () => {
      const result = await apiService.createOne(doc ?? notesDto.create({ title: 'empty' }))
      await fetchAll()

      return result
    })
  }

  async function updateOne (doc: notesDto.INote) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(doc)
      await fetchAll()
    })
  }

  async function removeOne (_id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(_id)
      await fetchAll()
    })
  }

  const filteredDocs = computed(() => {
    if (listFilter.value == null || listFilter.value === '') {
      return docs.value
    }

    const needle = listFilter.value.toLowerCase()
    return docs.value.filter((note: notesDto.INote) => {
      return note.title.toLowerCase().indexOf(needle) > -1
    })
  })

  function getDocsOptionsByTitles (docIds: string[]) {
    return selectsUtils.getOptionsByTitles(docs.value, docIds)
  }

  return {
    ...asyncState,
    ...usePagination({
      elementsPerPage: ELEMENTS_PER_PAGE,
      elementsForPagination: filteredDocs,
    }),
    docs,
    queryMarkers,
    listFilter,
    count: computed(() => docs.value.length),
    filteredDocs,
    getDocsOptionsByTitles,
    fetchAll,
    createOne,
    updateOne,
    removeOne,
  }
}
