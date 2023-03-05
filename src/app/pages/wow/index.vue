<template>

<PagesUi.Page>
  <q-table
    :loading="wowStore.isBusy"
    :rows="wowStore.subjects"
    :columns="wowTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="wowStore.filter"
    row-key="_id"
    title="Subjects"
    @row-dblclick.stop
  >

    <template v-slot:top-left>
      <TablesUi.TableActions
        @refresh="wowStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TablesUi.TableSearch v-model="wowStore.filter" />
    </template>

    <template v-slot:header="props">
      <TablesUi.TableColumnLabels v-bind="props" />
    </template>

    <template v-slot:body="props">

      <q-tr :props="props">

        <TablesUi.TableRowExpandButton
          v-bind="props"
          @toggle="props.expand = !props.expand"
        />

        <q-td v-for="col in props.cols" :key="col.name" :props="props">

          <TablesUi.TableCellValueCopiable :type="col.type" :value="col.value" />

          <div v-if="col.type === tableConsts.COLUMN_TYPES.COVER">
            <WowUi.Cover :src="col.value" />
          </div>

          <TablesUi.TableCellValueActions :type="col.type">
            <ButtonUi.ButtonMiniEdit @click="onCreateOrEdit(props.row)" />
            <ButtonUi.ButtonMiniRemove @click="onRemove(props.row._id)" />
          </TablesUi.TableCellValueActions>

          <TablesUi.TableCellValueRow :type="col.type" :value="col.value" />

        </q-td>

      </q-tr>

      <TablesUi.TableTextPlain v-show="props.expand" v-bind="props" />

    </template>

  </q-table>
</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'WOWPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { toRaw } from 'vue'

import { useWowStore } from '@/stores/wow'

import { PagesUi } from '@/modules/gui/pages'
import { ButtonUi } from '@/modules/gui/buttons'
import { TablesUi, tableConsts } from '@/modules/gui/tables'

import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
// import { clipboardUtils } from '@/modules/core/clipboard'
import {
  WowUi,
  wowConsts,
  wowClasses,
  wowFabrics,
  useSubjectDialogCreation,
  wowTableUtils,
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
