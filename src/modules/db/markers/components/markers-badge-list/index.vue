<template>

<q-badge
  v-for="marker in markers" :key="marker.title"
  :style="{ backgroundColor: marker.bgColor, color: marker.textColor }"
  :label="marker.title"
/>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import { useMarkersStore } from '@/stores/markers'

const props = defineProps<{
  markersIds: string[]
}>()

const markersStore = useMarkersStore()

const markers = computed(() => markersStore.getDocsOptionsByTitles(props.markersIds))

</script>
