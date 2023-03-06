<template>

<div class="text-body2">{{ text }}</div>

</template>

<script lang="ts">

export default {
  name: 'Body_2',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>
