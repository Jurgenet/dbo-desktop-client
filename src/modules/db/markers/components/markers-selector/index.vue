<template>

<div class="row items-center markersSelector">
  <q-select
    v-bind="$attrs"
    v-model="markers"
    :options="filteredMarkers"
    label="markers"
    class="col"
    option-value="title"
    option-label="title"
    input-debounce="300"
    options-dense
    multiple
    use-chips
    use-input
    outlined
    @filter="onFilterFn"
    @input-value="onTypingMarkerLabel"
  />
  <q-btn
    v-if="!noCreate"
    class="q-ml-md"
    label="create marker"
    color="primary"
    @click="isOpenMarkerCreationDialog = true"
  />
</div>

<MarkersUi.MarkerDialogCreation
  v-model="isOpenMarkerCreationDialog"
  :marker="newMarker"
  @apply="onCreateMarker"
/>

</template>

<script lang="ts">

export default {
  name: 'MarkersSelector',
  inheritAttrs: false,
}

</script>

<script setup lang="ts">

import { ref, watch } from 'vue'

import { useMarkersStore } from '@/stores/markers'

import { selectsUtils } from '@/modules/gui/selects'
import { markersDto, MarkersUi } from '@/modules/db/markers'

const props = defineProps<{
  markersTitles: string[]
  noCreate?: boolean
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'reselect', titles: string[]): void
}>()

const markersStore = await useMarkersStore()

const isOpenMarkerCreationDialog = ref(false)
const markers = ref(markersStore.getDocsOptionsByTitles(props.markersTitles))
const filteredMarkers = ref(markersStore.docs.value)
const newMarker = ref({ title: '' })

watch(markers, (markers) => {
  emits('reselect', selectsUtils.optionsToTitles(markers ?? []))
}, { deep: true })

function onTypingMarkerLabel (markerLabel: string) {
  if (markerLabel) {
    newMarker.value.title = markerLabel
  }
}

function onCreateMarker (marker: markersDto.IMarker) {
  markersStore.createOne(marker)
  markers.value.push(marker)
  isOpenMarkerCreationDialog.value = false
}

/**
 * TODO: IS-007
 */
function onFilterFn (val: string, update: (f: () => void) => void) {
  if (val === '') {
    update(() => {
      filteredMarkers.value = markersStore.docs
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    filteredMarkers.value = markersStore.docs.filter((v: markersDto.IMarker) => v.title.toLowerCase().indexOf(needle) > -1)
  })
}

</script>
