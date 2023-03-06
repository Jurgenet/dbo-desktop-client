<template>

<PageUi.Page class="q-gutter-y-md">

  <Filters />

  <q-table
    :loading="wowStore.isBusy"
    :rows="wowStore.subjects"
    :columns="wowConsts.TABLE_COLUMNS"
    :rows-per-page-options="[15]"
    :filter="wowStore.filter"
    row-key="_id"
    title="Subjects"
    @row-dblclick.stop
  >

    <template v-slot:top-left>
      <TableUi.TableActions
        @refresh="wowStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TableUi.TableSearch v-model="wowStore.filter" />
    </template>

    <template v-slot:header="props">
      <TableUi.TableColumnLabels v-bind="props" />
    </template>

    <template v-slot:body="props">

      <q-tr :props="props">

        <TableUi.TableRowExpandButton
          v-bind="props"
          @toggle="props.expand = !props.expand"
        />

        <q-td v-for="col in props.cols" :key="col.name" :props="props">

          <TableUi.TableCellValueCopiable :type="col.type" :value="col.value" />

          <div v-if="col.type === tableConsts.COLUMN_TYPES.COVER">
            <WowUi.Cover :src="col.value" />
          </div>

          <TableUi.TableCellValueBadges :type="col.type" :value="col.value" />

          <TableUi.TableCellValueActions :type="col.type">
            <ButtonUi.ButtonMiniEdit @click="onCreateOrEdit(props.row)" />
            <ButtonUi.ButtonMiniRemove @click="onRemove(props.row._id)" />
          </TableUi.TableCellValueActions>

          <TableUi.TableCellValueRow :type="col.type" :value="col.value" />

        </q-td>

      </q-tr>

      <TableUi.TableTextPlain v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'WOWPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { toRaw } from 'vue'

import Filters from './filters/index.vue'

import { useWowStore } from '@/stores/wow'

import { PageUi } from '@/modules/gui/page'
import { ButtonUi } from '@/modules/gui/button'
import { TableUi, tableConsts } from '@/modules/gui/table'
import { useCustomDialogConfirmation } from '@/modules/gui/dialog'
import {
  WowUi,
  wowConsts,
  wowClasses,
  wowFabrics,
  useSubjectDialogCreation,
} from '@/modules/db/subjects/wow'

const wowStore = useWowStore()

function onCreateOrEdit (subjectRow: wowClasses.ISubject| null) {
  const isCreating = subjectRow === null
  const subject = isCreating
    ? wowFabrics.create({ title: wowStore.filter })
    : wowFabrics.clone(toRaw(subjectRow))

  useSubjectDialogCreation({ isCreating, subject })
    .onOk(({ appliedSubject }: { appliedSubject: wowClasses.ISubject }) => {
      if (isCreating) {
        wowStore.createOne(appliedSubject)
      } else {
        wowStore.updateOne(appliedSubject)
      }
    })
}

function onRemove (id: string) {
  useCustomDialogConfirmation({ message: wowConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => wowStore.removeOne(id))
}

</script>
