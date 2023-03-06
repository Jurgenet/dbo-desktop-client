<template>

<div @click="onOpen">
  <slot />
</div>

<teleport to="body">
  <q-dialog v-model="isVisibleRef" persistent full-width>
    <q-card>

      <q-card-section>
        <div class="text-h6">Markers</div>
      </q-card-section>

      <q-card-section>
        <MarkersUi.MarkersTable />
      </q-card-section>

      <CardUi.CardActions>
        <DialogUi.DialogButtonOk />
      </CardUi.CardActions>

    </q-card>
  </q-dialog>
</teleport>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { DialogUi } from '@/modules/gui/dialog'
import { CardUi } from '@/modules/gui/card'
import { MarkersUi } from '@/modules/db/subjects/markers'

const isVisibleRef = ref(false)

function onOpen () {
  isVisibleRef.value = !isVisibleRef.value
}

</script>
