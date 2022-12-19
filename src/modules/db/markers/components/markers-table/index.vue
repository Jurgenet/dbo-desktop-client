<template>

<q-table
  :loading="markersStore.isBusy"
  :rows="markersStore.docs"
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
      <div>
        <q-badge
          :style="{ backgroundColor: props.row.bgColor, color: props.row.textColor }"
          :label="props.row.title"
        />
      </div>
    </q-td>
  </template>

  <template v-slot:body-cell-actions="props">
    <q-td :props="props">
      <div class="row justify-end no-wrap">
        <ButtonsUi.TypedButton :type="ButtonsUi.TypedButtonType.TableCellActionStyle" tooltip="copy styles" @click="onCopyStyles(props.row)" />
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
  markersDto,
  useMarkersDialogCreation,
  markersTableUtils,
} from '@/modules/db/markers'

const markersStore = useMarkersStore()

function onCreateOrEdit (marker: markersDto.IMarker | null) {
  const _marker = marker ? { ...marker } : markersDto.create({ title: markersStore.filter })

  useMarkersDialogCreation({ marker: _marker })
    .onOk(({ appliedMarker }: { appliedMarker: markersDto.IMarker }) => {
      if (appliedMarker._id) {
        markersStore.updateOne(appliedMarker)
      } else {
        markersStore.createOne(appliedMarker)
      }
    })
}

async function onRemove (_id: string) {
  useCustomDialogConfirmation({ message: 'Are you sure?' })
    .onOk(() => markersStore.removeOne(_id))
}

function onCopyStyles ({ textColor, bgColor }: { textColor: string, bgColor: string }) {
  markersStore.copyToStylesBuffer({ textColor, bgColor })
}

</script>

<style lang="sass">

.markerExample
  align-self: center

</style>
