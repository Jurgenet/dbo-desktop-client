<template>

<img :src="src" class="cover" />

</template>

<script lang="ts">

export default {
  name: 'WowCover',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{ src: string }>()

</script>

<style lang="sass" scoped>

.cover
  width: 40px

  border-radius: 6px

</style>
