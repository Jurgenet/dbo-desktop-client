<template>

<h2 class="text-h2">{{ text }}</h2>

</template>

<script lang="ts">

export default {
  name: 'Headline_2',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
