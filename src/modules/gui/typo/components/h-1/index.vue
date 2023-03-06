<template>

<h1 class="text-h1">{{ text }}</h1>

</template>

<script lang="ts">

export default {
  name: 'Headline_1',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
