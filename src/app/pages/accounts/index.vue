<template>

<q-page class="q-pa-md">
  <q-table
    :loading="accountsStore.isBusy"
    :rows="accountsStore.docs"
    :columns="accountsTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="accountsStore.filter"
    row-key="_id"
    title="Accounts"
    @row-dblclick.stop
  >

    <template v-slot:top-left>
      <TablesUi.TableActions
        @refresh="accountsStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TablesUi.TableSearch v-model="accountsStore.filter" />
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

  <PreloadersUi.Regular :is-visible="accountsStore.isBusy" />
</q-page>

</template>

<script setup lang="ts">

import { useAccountsStore } from '@/stores/accounts'

import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  accountsDto,
  useAccountsDialogCreation,
  accountsTableUtils,
} from '@/modules/db/accounts'

const accountsStore = useAccountsStore()

function onCreateOrEdit (account: accountsDto.IAccount | null) {
  const _account = account ? { ...account } : accountsDto.create({ title: accountsStore.filter })

  useAccountsDialogCreation({ account: _account })
    .onOk(({ appliedAccount }: { appliedAccount: accountsDto.IAccount }) => {
      if (appliedAccount._id) {
        accountsStore.updateOne(appliedAccount)
      } else {
        accountsStore.createOne(appliedAccount)
      }
    })
}

function onRemove (_id: string) {
  useCustomDialogConfirmation({ message: 'Are you sure?' })
    .onOk(() => accountsStore.removeOne(_id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
