<template>

<q-card-actions
  :align="align"
  :vertical="vertical"
  :class="classRef"
>
  <slot />
</q-card-actions>

</template>

<script lang="ts">

export default {
  name: 'CardActions',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
  // Specify how to align the actions
  // left (for horizontal mode) / stretch (for vertical mode)
  align?: 'right' | 'left' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'
  vertical?: boolean
  // CUSTOM
  class?: string
}>(), {
  align: 'right',
  vertical: false,
})

const classRef = ref(`text-primary ${props.class ?? ''}`)

</script>
