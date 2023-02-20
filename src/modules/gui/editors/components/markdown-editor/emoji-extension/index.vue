<template>

<dropdown-toolbar
  :visible="state.visible"
  title="emoji"
  @on-change="onChange"
>

  <template #overlay>
    <div class="emoji-container">
      <ol class="emojis">
        <li
          v-for="(emoji, index) of emojis" :key="`emoji-${index}`"
          v-text="emoji"
          @click="onTrigger(emoji)"
        ></li>
      </ol>
    </div>
  </template>

  <template #trigger>
    <div>Emoji</div>
  </template>

</dropdown-toolbar>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'
import type { PropType } from 'vue'
import MdEditor from 'md-editor-v3'
import type { InsertContentGenerator } from 'md-editor-v3'
import { emojis } from './emoji-data'

const { DropdownToolbar } = MdEditor

const props = defineProps({
  onInsert: {
    type: Function as PropType<(generator: InsertContentGenerator) => void>,
    default: () => () => null,
  },
})

const state = reactive({
  visible: false,
})

const onTrigger = (emoji: string) => {
  const generator: InsertContentGenerator = () => {
    return {
      targetValue: emoji,
      select: true,
      deviationStart: 0,
      deviationEnd: 0,
    }
  }

  props.onInsert(generator)
}

const onChange = (visible: boolean) => {
  state.visible = visible
}
</script>

<script lang="ts">
export default {
  name: 'EmojiExtension',
}

</script>
