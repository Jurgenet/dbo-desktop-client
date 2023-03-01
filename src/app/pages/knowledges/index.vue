<template>

<PagesUi.Page>

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
    <TablesUi.TableActions
      @refresh="knowledgesStore.fetchAll"
      @create="onCreateOrEdit(null)"
    />
  </template>

  <template v-slot:top-right>
    <TablesUi.TableSearch v-model="knowledgesStore.filter" />
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

    <TablesUi.TableTextHtml v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

  <PreloadersUi.Regular :is-visible="knowledgesStore.isBusy" />

</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'KnowledgesPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { useKnowledgesStore } from '@/stores/knowledges'

import { PagesUi } from '@/modules/gui/pages'
import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
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
    ? knowledgesFabrics.clone(knowledgeRow)
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
