<template>

<h5 class="text-h5">{{ text }}</h5>

</template>

<script lang="ts">

export default {
  name: 'Headline_5',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
