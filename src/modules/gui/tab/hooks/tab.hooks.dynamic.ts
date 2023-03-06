
import { ref, Ref, watch } from 'vue'
import _find from 'lodash/find'

import { tabDto } from '@/modules/gui/tab'
import { listUtils } from '@/modules/core/array'

const ROOT_TAB_NAME = 'root'

export default function useTabDynamic () {
  const activeTab = ref(ROOT_TAB_NAME)
  const tabs: Ref<tabDto.ITab[]> = ref([])

  watch(activeTab, (tabName) => {
    // TODO: IS-009
    const openedTab = _findTabByName(tabName)

    if (!openedTab) {
      activeTab.value = ROOT_TAB_NAME
    }
  })

  function createTab (label: string, data: unknown, isInBackground = true) {
    const tab = tabDto.create(label, data)

    tabs.value.push(tab)

    if (!isInBackground) {
      activeTab.value = tab.name
    }
  }

  function updateTab ({ tab, label }: { tab: tabDto.ITab, label: string }) {
    const updatedTab = _findTabByName(tab.name)

    updatedTab.label = label
  }

  function removeTab (tab: tabDto.ITab) {
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

  function _findTabByName (tabName: string) {
    return _find(tabs.value, (tab: tabDto.ITab) => tab.name === tabName)
  }

  return {
    activeTab,
    tabs,
    createTab,
    updateTab,
    removeTab,
    setTabAlert,
  }
}
