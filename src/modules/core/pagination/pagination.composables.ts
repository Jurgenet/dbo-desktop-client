import { ref, Ref, computed } from 'vue'

interface IProps {
  elementsPerPage: number,
  elementsForPagination: Ref<[]>
}

export default function usePaginationState ({ elementsPerPage = 12, elementsForPagination }: IProps) {
  const currentPage = ref(1)

  const slicePositionStart = computed(() => (currentPage.value - 1) * elementsPerPage)
  const slicePositionEnd = computed(() => currentPage.value * elementsPerPage)

  const lastPageNumber = computed(() => Math.ceil(elementsForPagination.value.length / elementsPerPage))

  const paginatedElements = computed(() => elementsForPagination.value.slice(slicePositionStart.value, slicePositionEnd.value))

  return {
    currentPage,
    slicePositionStart,
    slicePositionEnd,
    lastPageNumber,
    paginatedElements,
  }
}
