<template>

<h3 class="text-h3">{{ text }}</h3>

</template>

<script lang="ts">

export default {
  name: 'Headline_3',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
