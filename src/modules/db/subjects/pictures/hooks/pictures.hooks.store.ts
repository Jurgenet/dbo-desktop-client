import { ref, Ref, computed } from 'vue'

import { useAsyncState } from '@/modules/state'
import {
  picturesDto,
  picturesClasses,
  picturesFabrics,
  picturesApiService,
} from '@/modules/db/subjects/pictures'

export default function usePicturesStore () {
  const asyncState = useAsyncState()
  const apiService = picturesApiService()

  // data
  const pictures: Ref<picturesClasses.IOrders[]> = ref([])
  const count = computed(() => pictures.value.length)
  const ids = computed(() => pictures.value.map((picture) => picture._id))

  // crud
  async function fetchAll (params: unknown = {}) {
    return asyncState.runTask(async () => {
      const { docs: pictureList } = await apiService.fetchAll()

      pictures.value = pictureList.map((dto: picturesDto.IPicturesDto) => picturesFabrics.create(dto))
    }, params)
  }

  async function updateOne (picture: picturesClasses.IPicture) {
    return asyncState.runTask(async () => {
      await apiService.updateOne(picture.dto)
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

  function clear () {
    pictures.value = []
    filter.value = ''
  }

  return {
    ...asyncState,
    // data
    pictures,
    count,
    ids,
    // filters
    filter,
    // crud
    fetchAll,
    updateOne,
    removeOne,
    //
    clear,
  }
}
