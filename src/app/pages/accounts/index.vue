<template>

<PagesUi.Page>
  <q-table
    :loading="accountsStore.isBusy"
    :rows="accountsStore.accounts"
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

      <TablesUi.TableTextPlain v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

  <PreloadersUi.Regular :is-visible="accountsStore.isBusy" />
</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'AccountsPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { useAccountsStore } from '@/stores/accounts'

import { PagesUi } from '@/modules/gui/pages'
import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  accountsConsts,
  accountsClasses,
  accountsFabrics,
  useAccountsDialogCreation,
  accountsTableUtils,
} from '@/modules/db/subjects/accounts'

const accountsStore = useAccountsStore()

function onCreateOrEdit (accountRow: accountsClasses.IAccount | null) {
  const isCreating = accountRow === null
  const account = accountRow
    ? accountsFabrics.clone(accountRow)
    : accountsFabrics.create({ title: accountsStore.filter })

  useAccountsDialogCreation({ isCreating, account })
    .onOk(({ appliedAccount }: { appliedAccount: accountsClasses.IAccount }) => {
      if (isCreating) {
        accountsStore.createOne(appliedAccount)
      } else {
        accountsStore.updateOne(appliedAccount)
      }
    })
}

function onRemove (id: string) {
  useCustomDialogConfirmation({ message: accountsConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => accountsStore.removeOne(id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
