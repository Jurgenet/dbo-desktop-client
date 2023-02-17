<template>

<div class="column items-center">

  <div>{{ title }}</div>

  <q-badge
    v-if="label && textColor && bgColor"
    :style="{
      color: textColor,
      backgroundColor: bgColor
    }"
    :label="label"
    class="markerExample q-mt-sm"
  />

  <q-icon v-else name="block" size="26px" />

</div>

</template>

<script setup lang="ts">

defineProps<{ title: string, label?: string, textColor?: string, bgColor?: string }>()

</script>
