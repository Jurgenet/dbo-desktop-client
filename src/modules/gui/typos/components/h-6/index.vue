<template>

<h6 class="text-h6">{{ text }}</h6>

</template>

<script lang="ts">

export default {
  name: 'Headline_6',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
