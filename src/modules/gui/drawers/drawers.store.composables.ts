import { ref } from 'vue'

export default function useDrawerStore () {
  const isLeftDrawerOpened = ref(true)

  function toggleLeftDrawer () {
    isLeftDrawerOpened.value = !isLeftDrawerOpened.value
  }

  return {
    isLeftDrawerOpened,
    toggleLeftDrawer,
  }
}
