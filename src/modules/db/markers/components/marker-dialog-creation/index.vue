<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 350px">

    <q-card-section>
      <div class="text-h6">Marker {{ markerRef._id ? 'Updating' : 'Creating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.Regular
          v-model="markerRef.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />

        <q-select
          v-model="markerRef.group"
          :options="groups"
          :rules="[val => !!val || 'Field is required']"
          placeholder="Group"
          dense
          autofocus
        />

        <div class="row justify-around q-gutter-sm">
          <q-color v-model="markerRef.bgColor" />
          <q-color v-model="markerRef.textColor" />
        </div>

        <q-badge
          :style="{
            color: isPreviewBuffer && markersStore.stylesBuffer.textColor ? markersStore.stylesBuffer.textColor : markerRef.textColor,
            backgroundColor: isPreviewBuffer && markersStore.stylesBuffer.bgColor ? markersStore.stylesBuffer.bgColor : markerRef.bgColor,
          }"
          :label="markerRef.title ? markerRef.title : 'example'"
          class="markerExample q-mt-xl"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn label="Drop styles" flat @click="onDropStylesToDefault" />
      <q-btn
        :disable="!markersStore.stylesBuffer"
        label="Apply buffer styles"
        flat
        @click="onPasteStylesFromBuffer"
        @mouseenter="(isPreviewBuffer = true)"
        @mouseleave="(isPreviewBuffer = false)"
      />
      <q-space />
      <q-btn label="Cancel" flat text-color="red-5" @click="onDialogHide" />
      <q-btn label="Apply Changes" flat text-color="green-4" @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { useMarkersStore } from '@/stores/markers'

import { InputsUi } from '@/modules/gui/inputs'

import { markersDto } from '@/modules/db/markers'

const props = defineProps<{ marker: markersDto.IMaker }>()
defineEmits([...useDialogPluginComponent.emits])

const markersStore = useMarkersStore()

const groups = Object.values(markersDto.IMarkerGroups)

const isPreviewBuffer = ref(false)
const markerRef = ref(props.marker as markersDto.IMaker)

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

function onApply () {
  if (markerRef.value.title) {
    onDialogOK({ appliedMarker: markerRef.value })
  }
}

function onDropStylesToDefault () {
  setStyles()
}

function onPasteStylesFromBuffer () {
  setStyles(markersStore.stylesBuffer)
}

function setStyles ({ bgColor, textColor } = { bgColor: '#dedede', textColor: '#000000' }) {
  markerRef.value.bgColor = bgColor
  markerRef.value.textColor = textColor
}

</script>

<style lang="sass" scoped>

.markerExample
  align-self: center

</style>
