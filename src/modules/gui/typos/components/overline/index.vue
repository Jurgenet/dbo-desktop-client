<template>

<div class="text-overline">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'TheOverline',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
