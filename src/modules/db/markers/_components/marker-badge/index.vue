<template>

<q-badge :label="marker._id" :style="marker.cssStyles" />

</template>

<script setup lang="ts">

import { markersClasses } from '@/modules/db/markers'

defineProps<{ marker: markersClasses.IMarker }>()

</script>
