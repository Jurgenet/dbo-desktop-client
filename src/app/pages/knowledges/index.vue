<template>

<q-page class="q-pa-md column">

  <q-table
    :loading="knowledgesStore.isBusy"
    :rows="knowledgesStore.docs"
    :columns="knowledgesTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="knowledgesStore.filter"
    row-key="_id"
    title="Accounts"
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

    <TablesUi.TableRowText v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

  <PreloadersUi.Regular :is-visible="knowledgesStore.isBusy" />
</q-page>

</template>

<script setup lang="ts">

import { useKnowledgesStore } from '@/stores/knowledges'

import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  knowledgesDto,
  useKnowledgesDialogCreation,
  knowledgesTableUtils,
} from '@/modules/db/knowledges'

const knowledgesStore = useKnowledgesStore()

function onCreateOrEdit (knowledge: knowledgesDto.IKnowledge | null) {
  const _knowledge = knowledge ? { ...knowledge } : knowledgesDto.create({ title: knowledgesStore.filter })

  useKnowledgesDialogCreation({ knowledge: _knowledge })
    .onOk(({ appliedKnowledge }: { appliedKnowledge: knowledgesDto.IKnowledge }) => {
      if (appliedKnowledge._id) {
        knowledgesStore.updateOne(appliedKnowledge)
      } else {
        knowledgesStore.createOne(appliedKnowledge)
      }
    })
}

function onRemove (_id: string) {
  useCustomDialogConfirmation({ message: 'Are you sure?' })
    .onOk(() => knowledgesStore.removeOne(_id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
