<template>

<div class="text-subtitle1">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'Subtitle_1',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
