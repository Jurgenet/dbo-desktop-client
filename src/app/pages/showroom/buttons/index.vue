<template>

<div class="row q-gutter-x-sm">
  <ButtonUi.Button label="regular"/>
  <ButtonUi.ButtonCancel />
  <ButtonUi.ButtonCreate />
  <ButtonUi.ButtonRoute label="route" />
  <ButtonUi.ButtonOk />
</div>

<div class="q-mt-md row q-gutter-x-sm">
  <ButtonUi.ButtonMini tooltip="mini button"/>
  <ButtonUi.ButtonMiniClose tooltip="mini button close"/>
  <ButtonUi.ButtonMiniCopy tooltip="mini button copy" clip-value="something important" />
  <ButtonUi.ButtonMiniEdit tooltip="mini button edit"/>
  <ButtonUi.ButtonMiniExpander
    :is-expanded="isExpandedRef"
    tooltip="mini button expander"
    @click="isExpandedRef = !isExpandedRef"
  />
  <ButtonUi.ButtonMiniForward tooltip="mini button forward"/>
  <ButtonMiniLinkWithClipboardHOC tooltip="mini button link withClippoard HOC" clip-value="withClipboard HOC"/>
  <ButtonUi.ButtonMiniMask tooltip="mini button mask password"/>
  <ButtonUi.ButtonMiniOpenTab tooltip="mini button open tab"/>
  <ButtonUi.ButtonMiniPin
    :is-pinned="isPinnedRef"
    tooltip="mini button pin/inpin"
    @click="isPinnedRef = !isPinnedRef"
    />
  <ButtonUi.ButtonMiniRemove tooltip="mini button remove"/>
  <ButtonUi.ButtonMiniStyle tooltip="mini button style"/>
</div>

</template>

<script lang="ts">

export default {
  name: 'ButtonsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

import { ButtonUi } from '@/modules/gui/button'
import { withClipboard } from '@/modules/core/clipboard'

const isPinnedRef = ref(false)
const isExpandedRef = ref(false)

const ButtonMiniLinkWithClipboardHOC = withClipboard(ButtonUi.ButtonMiniLink)

</script>
