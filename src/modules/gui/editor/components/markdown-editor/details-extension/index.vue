<template>

<normal-toolbar
  title="mark"
  @on-click="onTrigger"
>
  <template #trigger>
    <div>Details</div>
  </template>
</normal-toolbar>

</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import type { InsertContentGenerator } from 'md-editor-v3'
import MdEditor from 'md-editor-v3'

const { NormalToolbar } = MdEditor

const props = defineProps({
  onInsert: {
    type: Function as PropType<(generator: InsertContentGenerator) => void>,
    default: () => () => null,
  },
})

const onTrigger = () => {
  const generator: InsertContentGenerator = (selectedText) => {
    return {
      targetValue: `<details>
<summary>📍 click</summary>

${selectedText}

</details>`,
      select: true,
      deviationStart: 0,
      deviationEnd: 0,
    }
  }

  props.onInsert(generator)
}

</script>

<script lang="ts">

export default {
  name: 'DetailsExtension',
}

</script>
