<template>

<MdEditor
  :model-value="modelValue"
  :toolbars="toolbars"
  :editor-id="editorId"
  ref="editorRef"
  language="en-US"
  @update:model-value="emits('update:modelValue', $event)"
>
  <template #defToolbars>
    <details-extension :on-insert="insert" />
    <mark-extension :on-insert="insert" />
    <emoji-extension :on-insert="insert" />
  </template>
</MdEditor>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import MdEditor from 'md-editor-v3'
import type { ExposeParam, InsertContentGenerator } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

import { toolbars } from './tollbarConfig'
import DetailsExtension from './details-extension/index.vue'
import MarkExtension from './mark-extension/index.vue'
import EmojiExtension from './emoji-extension/index.vue'

defineProps<{
  modelValue: string
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorRef = ref<ExposeParam>()
const editorId = 'editor-preview'

const insert = (generator: InsertContentGenerator) => {
  editorRef.value?.insert(generator)
}

</script>

<style lang="sass">

.emoji-container
  border-radius: 3px
  border: 1px solid #e6e6e6

.emojis
  position: relative
  width: 363px
  margin: 10px
  padding: 0
  background-color: #fff

  li
    cursor: pointer
    float: left
    height: 24px
    width: 28px
    overflow: hidden
    margin: -1px 0 0 -1px
    padding: 4px 2px
    text-align: center
    list-style: none
    z-index: 11

  &::after
    content: ''
    clear: left
    display: block

  *
    user-select: none

</style>
