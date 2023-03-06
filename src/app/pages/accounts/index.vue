<template>

<PageUi.Page>
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
      <TableUi.TableActions
        @refresh="accountsStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TableUi.TableSearch v-model="accountsStore.filter" />
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

      <TableUi.TableTextPlain v-show="props.expand" v-bind="props" />

    </template>

  </q-table>

  <PreloaderUi.Preloader :is-visible="accountsStore.isBusy" />
</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'AccountsPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { toRaw } from 'vue'

import { useAccountsStore } from '@/stores/accounts'

import { PageUi } from '@/modules/gui/page'
import { TableUi } from '@/modules/gui/table'
import { useCustomDialogConfirmation } from '@/modules/gui/dialog'
import { PreloaderUi } from '@/modules/gui/preloader'
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
    ? accountsFabrics.clone(toRaw(accountRow))
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
