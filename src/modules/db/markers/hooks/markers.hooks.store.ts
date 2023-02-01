import { ref, Ref, computed } from 'vue'

import { selectsUtils } from '@/modules/gui/selects'
import { useAsyncState } from '@/modules/state'
import {
  markersDto,
  markersClasses,
  markersFabrics,
  markersApiService,
} from '@/modules/db/markers'

export default function useMarkersStore () {
  const asyncState = useAsyncState()
  const apiService = markersApiService()

  // data
  const markers: Ref<markersClasses.IMarker[]> = ref([])
  const count = computed(() => markers.value.length)
  const ids = computed(() => markers.value.map((marker) => marker._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: markerList } = await apiService.fetchAll()

      markers.value = markerList.map((dto: markersDto.IMarkerDto) => markersFabrics.create(dto))
    }, params)
  }

  async function createOne (marker: markersClasses.IMarker) {
    return asyncState.runTask(async () => {
      await apiService.createOne(marker.dto)
      await fetchAll()
    })
  }

  async function updateOne (marker: markersClasses.IMarker) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(marker.dto)
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

  // Buffer
  const bufferStyles: Ref<markersClasses.IMarkerStyles | null> = ref(null)

  function copyStylesToBuffer (styles: markersClasses.IMarkerStyles) {
    bufferStyles.value = styles
  }

  // Getters and computed
  function getMarkersByIds (ids: string[]) {
    return selectsUtils.getOptionsByIds(markers.value, ids)
  }

  const getAncestorById = (ancestorId: string) => selectsUtils.getOptionById(markers.value, ancestorId)

  return {
    ...asyncState,
    // data
    markers,
    count,
    ids,
    // filters
    filter,
    // crud
    createOne,
    fetchAll,
    updateOne,
    removeOne,
    // buffer
    bufferStyles,
    copyStylesToBuffer,
    // Getters
    getMarkersByIds,
    getAncestorById,
  }
}
