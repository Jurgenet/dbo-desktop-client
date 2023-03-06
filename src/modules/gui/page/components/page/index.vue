<template>

<q-page :class="classRef">
  <slot />
</q-page>

</template>

<script lang="ts">

const PADDING_CLASS = 'q-pa-md'

export default {
  name: 'ThePage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref, onBeforeMount } from 'vue'

const props = withDefaults(defineProps<{
  noPadding?: boolean
  class?: string
}>(), {
  noPadding: false,
})

const classRef = ref(props.class ?? '')

onBeforeMount(() => {
  if (!props.noPadding) classRef.value += ` ${PADDING_CLASS}`
})

</script>
