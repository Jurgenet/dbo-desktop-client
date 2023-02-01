<template>

<MarkersUi.MarkerBadge
  v-for="marker in markers" :key="marker._id"
  :marker="marker"
/>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import { MarkersUi } from '@/modules/db/markers'

import { useMarkersStore } from '@/stores/markers'

const props = defineProps<{ markersIds: string[] }>()

const markersStore = useMarkersStore()

const markers = computed(() => markersStore.getMarkersByIds(props.markersIds))

</script>
