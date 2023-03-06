<template>

<h4 class="text-h4">{{ text }}</h4>

</template>

<script lang="ts">

export default {
  name: 'Headline_4',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
