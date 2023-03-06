<template>

<PageUi.Page>

  <q-table
    :loading="ordersStore.isBusy"
    :rows="ordersStore.orders"
    :columns="ordersTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="ordersStore.filter"
    row-key="_id"
    title="Orders"
    @row-dblclick.stop
  >

    <template v-slot:top-left>
      <TableUi.TableActions
        @refresh="ordersStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TableUi.TableSearch v-model="ordersStore.filter" />
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

  <PreloaderUi.Preloader :is-visible="ordersStore.isBusy" />

</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'OrdersPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { toRaw } from 'vue'

import { useOrdersStore } from '@/stores/orders'

import { PageUi } from '@/modules/gui/page'
import { TableUi } from '@/modules/gui/table'
import { useCustomDialogConfirmation } from '@/modules/gui/dialog'
import { PreloaderUi } from '@/modules/gui/preloader'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  ordersConsts,
  ordersClasses,
  ordersFabrics,
  useOrdersDialogCreation,
  ordersTableUtils,
} from '@/modules/db/subjects/orders'

const ordersStore = useOrdersStore()

function onCreateOrEdit (orderRow: ordersClasses.IOrder | null) {
  const isCreating = orderRow === null
  const order = orderRow
    ? ordersFabrics.clone(toRaw(orderRow))
    : ordersFabrics.create({ title: ordersStore.filter })

  useOrdersDialogCreation({ isCreating, order })
    .onOk(({ appliedOrder }: { appliedOrder: ordersClasses.IOrder }) => {
      if (isCreating) {
        ordersStore.createOne(appliedOrder)
      } else {
        ordersStore.updateOne(appliedOrder)
      }
    })
}

function onRemove (id: string) {
  useCustomDialogConfirmation({ message: ordersConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => ordersStore.removeOne(id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>
