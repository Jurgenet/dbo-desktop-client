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
          <TablesUi.TableRowActions
            v-bind="{ col, row: props.row }"
            @edit="onCreateOrEdit"
            @remove="onRemove"
            @copy-reference="onCopyLink"
          />
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
import { TablesUi } from '@/modules/gui/tables'

import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
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

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
