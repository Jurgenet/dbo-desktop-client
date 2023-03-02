<template>

<div class="text-subtitle2">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'Subtitle_2',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
