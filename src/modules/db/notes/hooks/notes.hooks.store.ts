import { ref, Ref, computed } from 'vue'

import { selectsUtils } from '@/modules/gui/selects'
import { useAsyncState } from '@/modules/state'
import { usePagination } from '@/modules/core/pagination'
import {
  notesDto,
  notesClasses,
  notesFabrics,
  notesApiService,
} from '@/modules/db/notes'

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
      const { doc, message } = await apiService.createOne(notesFabrics.create().dto)
      console.log(message)

      await fetchAll()

      return notesFabrics.create(doc)
    })
  }

  async function updateOne (note: notesClasses.INote) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(note.dto)
      await fetchAll()
    })
  }

  async function removeOne (id: string) {
    return asyncState.runTask(async () => {
      await apiService.removeOne(id)
      await fetchAll()
    })
  }

  function getOptionsByTitles (ids: string[]) {
    return selectsUtils.getOptionsByTitles(notes.value, ids)
  }

  // filters
  const queryMarkers = ref([])
  const filter = ref('')

  const filteredNotes = computed(() => {
    if (filter.value === null || filter.value === '') {
      return notes.value
    }

    const needle = filter.value.toLowerCase()
    return notes.value.filter((note: notesClasses.INote) => {
      return note.dto.title.toLowerCase().indexOf(needle) > -1
    })
  })

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
    queryMarkers,
    filter,
    filteredNotes,
    // crud
    fetchAll,
    createOne,
    updateOne,
    removeOne,
    //
    getOptionsByTitles,
  }
}