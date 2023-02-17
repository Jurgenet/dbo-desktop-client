<template>

<div class="stylesExample q-mt-xl row justify-center items-center q-gutter-x-md">

  <StyleExampeBadge
    title="Ancestor"
    :label="ancestor._id"
    :textColor="ancestor.dto.textColor"
    :bgColor="ancestor.dto.bgColor"
  />

  <q-icon name="arrow_forward" />

  <StyleExampeBadge
    title="Self Styles"
    :label="label"
    :textColor="marker.dto.textColor"
    :bgColor="marker.dto.bgColor"
  />

  <q-icon name="arrow_forward" />

  <StyleExampeBadge
    title="Result"
    :label="label"
    :textColor="marker.styles.textColor"
    :bgColor="marker.styles.bgColor"
  />

  <q-icon name="arrow_back" />

  <StyleExampeBadge
    title="Buffer"
    :label="label"
    :textColor="markersStore?.bufferStyles?.textColor"
    :bgColor="markersStore?.bufferStyles?.bgColor"
  />

</div>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import StyleExampeBadge from './style-example-badge/index.vue'

import { markersClasses } from '@/modules/db/subjects/markers'
import { useMarkersStore } from '@/stores/markers'

const markersStore = useMarkersStore()

const props = defineProps<{ marker: markersClasses.IMarker }>()

const ancestor = computed(() => markersStore.getAncestorById(props.marker.dto.ancestor))
const label = computed(() => props.marker?.dto?._id ?? 'example')

</script>
