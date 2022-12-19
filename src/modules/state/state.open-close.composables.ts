import { ref } from 'vue'

interface IParams {
  opened?: boolean
}

export default function useOpenCloseState ({ opened = false }: IParams = {}) {
  const isOpened = ref(opened)

  function open () {
    isOpened.value = true
  }

  function close () {
    isOpened.value = false
  }

  return {
    isOpened,
    open,
    close,
  }
}
