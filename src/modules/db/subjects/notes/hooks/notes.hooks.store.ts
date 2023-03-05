import { ref, Ref, computed, watch } from 'vue'

import { selectUtils } from '@/modules/gui/select'
import { useAsyncState } from '@/modules/state'
import { usePagination } from '@/modules/core/pagination'
import {
  notesDto,
  notesClasses,
  notesFabrics,
  notesApiService,
} from '@/modules/db/subjects/notes'

const ELEMENTS_PER_PAGE = 14

export default function useNotesStore () {
  const apiService = notesApiService()
  const asyncState = useAsyncState()

  // data
  const notes: Ref<notesClasses.INote[]> = ref([])
  const count = computed(() => notes.value.length)
  const ids = computed(() => notes.value.map((note) => note._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: noteList } = await apiService.fetchAll()

      notes.value = noteList.map((dto: notesDto.INoteDto) => notesFabrics.create(dto))
    }, params)
  }

  async function createOne () {
    return asyncState.runTask(async () => {
      const { doc /*, message */ } = await apiService.createOne(notesFabrics.create().dto)

      await fetchAll()

      return notesFabrics.create(doc)
    })
  }

  async function updateOne (note: notesClasses.INote, { noFetching = false } = {}) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(note.dto)

      if (!noFetching) {
        await fetchAll()
      }
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  function getOptionsByTitles (ids: string[]) {
    return selectUtils.getOptionsByTitles(notes.value, ids)
  }

  // filters
  const isSearchByMarkers = ref(true)
  const searchQuery: Ref<string[] | string> = ref([])
  const filter = ref('')

  const isSearchQuery = computed(() => {
    return Array.isArray(searchQuery.value)
      ? searchQuery.value.length !== 0
      : Boolean(searchQuery.value)
  })

  watch(isSearchByMarkers, () => {
    isSearchByMarkers.value ? searchQuery.value = [] : searchQuery.value = ''
  })

  const filteredNotes = computed(() => {
    if (filter.value === null || filter.value === '') {
      return notes.value
    }

    const needle = filter.value.toLowerCase()
    return notes.value.filter((note: notesClasses.INote) => {
      return note.dto.title.toLowerCase().indexOf(needle) > -1
    })
  })

  async function search () {
    filter.value = ''

    if (!isSearchQuery.value) {
      fetchAll()
      return
    }

    return asyncState.runTask(async () => {
      let result = null

      if (isSearchByMarkers.value) {
        result = await apiService.findByMarkers(searchQuery.value)
      } else {
        result = await apiService.findByText(searchQuery.value)
      }

      notes.value = result.docs.map((dto: notesDto.INoteDto) => notesFabrics.create(dto))
    })
  }

  function clearSearch () {
    searchQuery.value = []
    filter.value = ''
    fetchAll()
  }

  return {
    ...asyncState,
    ...usePagination({
      elementsPerPage: ELEMENTS_PER_PAGE,
      elementsForPagination: filteredNotes,
    }),
    // data
    notes,
    count,
    ids,
    // filters
    isSearchByMarkers,
    searchQuery,
    filter,
    filteredNotes,
    search,
    clearSearch,
    // crud
    fetchAll,
    createOne,
    updateOne,
    removeOne,
    //
    getOptionsByTitles,
  }
}
