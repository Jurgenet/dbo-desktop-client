<template>

<q-table
  :loading="markersStore.isBusy"
  :rows="markersStore.markers"
  :columns="markersTableUtils.getColumns()"
  :rows-per-page-options="[15]"
  :filter="markersStore.filter"
  row-key="_id"
  title="Markers"
>

  <template v-slot:top-left>
    <div class="row q-gutter-sm">
      <q-btn label="Refresh" @click="markersStore.fetchAll" />
      <ButtonsUi.TypedButton
        :type="ButtonsUi.TypedButtonType.Create"
        @click="onCreateOrEdit(null)"
      />
    </div>
  </template>

  <template v-slot:top-right>
    <TablesUi.TableSearch v-model="markersStore.filter" />
  </template>

  <template v-slot:body-cell-example="props">
    <q-td :props="props">
      <MarkersUi.MarkerBadge :marker="props.row" />
    </q-td>
  </template>

  <template v-slot:body-cell-actions="props">
    <q-td :props="props">
      <div class="row justify-end no-wrap">
        <ButtonsUi.TypedButton :type="ButtonsUi.TypedButtonType.TableCellActionStyle" tooltip="copy styles" @click="onCopyStyles(props.row.styles)" />
        <ButtonsUi.TypedButton :type="ButtonsUi.TypedButtonType.TableCellActionEdit" @click="onCreateOrEdit(props.row)" />
        <ButtonsUi.TypedButton :type="ButtonsUi.TypedButtonType.TableCellActionDelete" @click="onRemove(props.row._id)" />
      </div>
    </q-td>
  </template>

</q-table>

<PreloadersUi.Regular :is-visible="markersStore.isBusy" />

</template>

<script setup lang="ts">

import { useMarkersStore } from '@/stores/markers'

import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { ButtonsUi } from '@/modules/gui/buttons'
import {
  markersConsts,
  markersClasses,
  markersFabrics,
  MarkersUi,
  useMarkersDialogCreation,
  markersTableUtils,
} from '@/modules/db/subjects/markers'

const markersStore = useMarkersStore()

function onCreateOrEdit (markerRow: markersClasses.IMarker | null) {
  const isCreating = markerRow === null
  const marker = markerRow
    ? markersFabrics.clone(markerRow)
    : markersFabrics.create({ _id: markersStore.filter })

  useMarkersDialogCreation({ isCreating, marker })
    .onOk(({ appliedMarker }: { appliedMarker: markersClasses.IMarker }) => {
      if (isCreating) {
        markersStore.createOne(appliedMarker)
      } else {
        markersStore.updateOne(appliedMarker)
      }
    })
}

async function onRemove (id: string) {
  useCustomDialogConfirmation({ message: markersConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => markersStore.removeOne(id))
}

function onCopyStyles (styles: markersClasses.IMarkerStyles) {
  markersStore.copyStylesToBuffer(styles)
}

</script>