<template>

<div class="text-body1">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'Body_1',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
