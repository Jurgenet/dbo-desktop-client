<template>

<div class="text-caption">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'TheCaption',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
