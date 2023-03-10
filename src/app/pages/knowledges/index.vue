<template>

<PageUi.Page>

  <q-table
    :loading="knowledgesStore.isBusy"
    :rows="knowledgesStore.knowledges"
    :columns="knowledgesTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="knowledgesStore.filter"
    row-key="_id"
    title="Knowledges"
    @row-dblclick.stop
  >

  <template v-slot:top-left>
    <TableUi.TableActions
      @refresh="knowledgesStore.fetchAll"
      @create="onCreateOrEdit(null)"
    />
  </template>

  <template v-slot:top-right>
    <TableUi.TableSearch v-model="knowledgesStore.filter" />
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
        <TableUi.TableRowActions
          v-bind="{ col, row: props.row }"
          @edit="onCreateOrEdit"
          @remove="onRemove"
          @copy-reference="onCopyLink"
        />
      </q-td>

    </q-tr>

    <TableUi.TableTextHtml v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

  <PreloaderUi.Preloader :is-visible="knowledgesStore.isBusy" />

</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'KnowledgesPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { toRaw } from 'vue'

import { useKnowledgesStore } from '@/stores/knowledges'

import { PageUi } from '@/modules/gui/page'
import { TableUi } from '@/modules/gui/table'
import { useCustomDialogConfirmation } from '@/modules/gui/dialog'
import { PreloaderUi } from '@/modules/gui/preloader'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  knowledgesConsts,
  knowledgesClasses,
  knowledgesFabrics,
  useKnowledgesDialogCreation,
  knowledgesTableUtils,
} from '@/modules/db/subjects/knowledges'

const knowledgesStore = useKnowledgesStore()

function onCreateOrEdit (knowledgeRow: knowledgesClasses.IKnowledge | null) {
  const isCreating = knowledgeRow === null
  const knowledge = knowledgeRow
    ? knowledgesFabrics.clone(toRaw(knowledgeRow))
    : knowledgesFabrics.create({ title: knowledgesStore.filter })

  useKnowledgesDialogCreation({ isCreating, knowledge })
    .onOk(({ appliedKnowledge }: { appliedKnowledge: knowledgesClasses.IKnowledge }) => {
      if (isCreating) {
        knowledgesStore.createOne(appliedKnowledge)
      } else {
        knowledgesStore.updateOne(appliedKnowledge)
      }
    })
}

function onRemove (id: string) {
  useCustomDialogConfirmation({ message: knowledgesConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => knowledgesStore.removeOne(id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
