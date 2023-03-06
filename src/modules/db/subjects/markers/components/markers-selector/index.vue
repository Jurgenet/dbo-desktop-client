<template>

<div class="row items-center markersSelector">
  <q-select
    v-bind="$attrs"
    v-model="markers"
    :options="filteredMarkers"
    label="markers"
    class="col"
    option-value="_id"
    option-label="_id"
    input-debounce="300"
    options-dense
    multiple
    use-chips
    use-input
    outlined
    @filter="onFilterFn"
    @input-value="onTypingMarkerId"
  />
  <ButtonUi.ButtonCreate class="q-ml-md" @click="onCreateMarker" />
</div>

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

import { ButtonUi } from '@/modules/gui/button'
import { selectUtils } from '@/modules/gui/select'
import {
  markersClasses,
  markersFabrics,
  useMarkersDialogCreation,
} from '@/modules/db/subjects/markers'

const props = defineProps<{
  markersIds: string[]
  noCreate?: boolean
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'reselect', ids: string[]): void
}>()

const markersStore = await useMarkersStore()

const markers = ref(markersStore.getMarkersByIds(props.markersIds))
const filteredMarkers = ref(markersStore.markers.value)
const newMarker = ref(markersFabrics.create())

watch(markers, (markers) => {
  emits('reselect', selectUtils.optionsToIds(markers ?? []))
}, { deep: true })

function onTypingMarkerId (markerId: string) {
  if (markerId) {
    newMarker.value.dto._id = markerId
  }
}

function onCreateMarker () {
  useMarkersDialogCreation({ isCreating: true, marker: newMarker.value })
    .onOk(({ appliedMarker }: { appliedMarker: markersClasses.IMarker }) => {
      markersStore.createOne(appliedMarker)
      markers.value.push(appliedMarker.dto)
    })
}

/**
 * TODO: IS-007
 */
function onFilterFn (val: string, update: (f: () => void) => void) {
  if (val === '') {
    update(() => {
      filteredMarkers.value = markersStore.markers
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    filteredMarkers.value = markersStore.markers.filter((v: markersClasses.IMarker) => v._id.toLowerCase().indexOf(needle) > -1)
  })
}

</script>
