<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 350px">

    <q-card-section>
      <div class="text-h6">Marker {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputUi.Input
          v-model="markerRef.dto._id"
          :readonly="!isCreating"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="ID"
        />

        <q-select
          v-model="markerRef.dto.group"
          :options="groups"
          :rules="[val => !!val || 'Field is required']"
          placeholder="Group"
          label="Group"
          dense
          autofocus
        />

        <q-select
          v-model="markerRef.dto.ancestor"
          :options="markersStore.ids"
          :rules="[val => !!val || 'Field is required']"
          placeholder="Ancestor"
          label="Ancestor"
          dense
          autofocus
        />

        <div class="row justify-around q-gutter-sm">
          <q-color v-model="markerRef.dto.bgColor" />
          <q-color v-model="markerRef.dto.textColor" />
        </div>

        <ExampeBadges :marker="markerRef"
        />

      </div>
    </q-card-section>

    <CardsUi.CardActionsCancelApply
      @cancel="onDialogHide"
      @apply="onApply"
    >
      <ButtonUi.Button label="Remove self styles" @click="onRemoveSelfStyles" />
      <ButtonUi.Button :disable="!markersStore.bufferStyles" label="Apply buffer styles" @click="onPasteStylesFromBuffer" />
  </CardsUi.CardActionsCancelApply>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import ExampeBadges from './example-badges/index.vue'

import { useMarkersStore } from '@/stores/markers'
import { CardsUi } from '@/modules/gui/cards'
import { ButtonUi } from '@/modules/gui/buttons'
import { InputUi } from '@/modules/gui/input'
import { markersClasses } from '@/modules/db/subjects/markers'

const props = defineProps<{ isCreating: boolean, marker: markersClasses.IMaker }>()
defineEmits([...useDialogPluginComponent.emits])

const markersStore = useMarkersStore()

const groups = Object.values(markersClasses.IMarkerGroups)

const markerRef = ref(props.marker as markersClasses.IMaker)

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

function onApply () {
  if (markerRef.value.dto._id) {
    onDialogOK({ appliedMarker: markerRef.value })
  }
}

function onRemoveSelfStyles () {
  setStyles()
}

function onPasteStylesFromBuffer () {
  setStyles(markersStore.bufferStyles)
}

function setStyles ({ bgColor, textColor } = { bgColor: '', textColor: '' }) {
  markerRef.value.dto.bgColor = bgColor
  markerRef.value.dto.textColor = textColor
}

</script>
