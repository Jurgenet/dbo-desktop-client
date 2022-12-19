
import { ref, Ref, watch } from 'vue'
import _find from 'lodash/find'

import { tabsDto } from '@/modules/gui/tabs'
import { listUtils } from '@/modules/core/array'

const ROOT_TAB_NAME = 'root'

export default function useTabsDynamic () {
  const activeTab = ref(ROOT_TAB_NAME)
  const tabs: Ref<tabsDto.ITab[]> = ref([])

  watch(activeTab, (tabName) => {
    // TODO: IS-009
    const openedTab = _find(tabs.value, (tab: tabsDto.ITab) => tab.name === tabName)

    if (!openedTab) {
      activeTab.value = ROOT_TAB_NAME
    }
  })

  function createTab (label: string, data: unknown, isInBackground = true) {
    const tab = tabsDto.create(label, data)

    tabs.value.push(tab)

    if (!isInBackground) {
      activeTab.value = tab.name
    }
  }

  function removeTab (tab: tabsDto.ITab) {
    // TODO: IS-001
    if (tab.isAlert) {
      console.log('Unable close tab. Save note before closing.')
    } else {
      tabs.value = listUtils.remove(tabs.value, [tab.name], 'name')
      activeTab.value = ROOT_TAB_NAME
    }
  }

  function setTabAlert (name: string, isAlert: boolean) {
    tabs.value = listUtils.update(tabs.value, { name, isAlert }, 'name')
  }

  return {
    activeTab,
    tabs,
    createTab,
    removeTab,
    setTabAlert,
  }
}
