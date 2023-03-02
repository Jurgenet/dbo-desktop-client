<template>

<div class="row q-gutter-x-sm">

  <q-table
    :loading="false"
    :rows="rows"
    :columns="columns"
    :rows-per-page-options="[15]"
    :filter="filterRef"
    row-key="_id"
    title="Table"
    @row-dblclick.stop
  >

  <template v-slot:top-left>
    <TablesUi.TableActions
      @refresh="log('refresh')"
      @create="log('create')"
    />
  </template>

  <!-- need for text toggle button -->
  <template v-slot:header="props">
    <TablesUi.TableColumnLabels v-bind="props" />
  </template>

  <template v-slot:top-right>
    <TablesUi.TableSearch v-model="filterRef" />
  </template>

  <template v-slot:body="props">

    <!-- table columns values here -->
    <q-tr :props="props">

      <!-- first injected column values -->
      <TablesUi.TableRowExpandButton
        v-bind="props"
        @toggle="props.expand = !props.expand"
      />

      <!-- columns values from table config -->
      <q-td v-for="col in props.cols" :key="col.name" :props="props">
        <template v-if="col.type === tableConsts.COLUMN_TYPES.ACTIONS">
          <div class="TableCellActions">
            <ButtonUi.ButtonMiniEdit />
            <ButtonUi.ButtonMiniRemove />
          </div>
        </template>
        <template v-else>
          {{ col.value }}
        </template>
      </q-td>

    </q-tr>

    <TablesUi.TableTextPlain v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

</div>

</template>

<script lang="ts">

export default {
  name: 'TablesRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

import { tableConsts, TablesUi } from '@/modules/gui/tables'
import { ButtonUi } from '@/modules/gui/buttons'

interface IRow {
  _id: string
  dto: {
    _id: string
    title: string
    text: string
  }
}

const rows = [
  { _id: '001', dto: { _id: '001', title: 'Title A', text: 'text A' } },
  { _id: '002', dto: { _id: '002', title: 'Title B', text: 'text B' } },
  { _id: '003', dto: { _id: '003', title: 'Title C', text: 'text C' } },
]

const columns = [
  {
    ...tableConsts.COLUMN_ID,
    field: (row: IRow) => row.dto._id,
    sortable: true,
  },
  {
    ...tableConsts.COLUMN_DEFAULT,
    name: 'title',
    label: 'Title',
    field: (row: IRow) => row.dto.title,
    sortable: true,
  },
  tableConsts.COLUMN_ACTIONS,
]

const filterRef = ref('')

function log (text: string) {
  console.log(text)
}

</script>
