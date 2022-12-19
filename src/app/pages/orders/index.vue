<template>

<q-page class="q-pa-md column">

  <q-table
    :loading="ordersStore.isBusy"
    :rows="ordersStore.docs"
    :columns="ordersTableUtils.getColumns()"
    :rows-per-page-options="[15]"
    :filter="ordersStore.filter"
    row-key="_id"
    title="Accounts"
    @row-dblclick.stop
  >

    <template v-slot:top-left>
      <TablesUi.TableActions
        @refresh="ordersStore.fetchAll"
        @create="onCreateOrEdit(null)"
      />
    </template>

    <template v-slot:top-right>
      <TablesUi.TableSearch v-model="ordersStore.filter" />
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

  <PreloadersUi.Regular :is-visible="ordersStore.isBusy" />
</q-page>

</template>

<script setup lang="ts">

import { useOrdersStore } from '@/stores/orders'

import { TablesUi } from '@/modules/gui/tables'
import { useCustomDialogConfirmation } from '@/modules/gui/dialogs'
import { PreloadersUi } from '@/modules/gui/preloaders'
import { clipboardUtils } from '@/modules/core/clipboard'
import {
  ordersDto,
  useOrdersDialogCreation,
  ordersTableUtils,
} from '@/modules/db/orders'

const ordersStore = useOrdersStore()

function onCreateOrEdit (order: ordersDto.IOrder | null) {
  const _order = order ? { ...order } : ordersDto.create({ title: ordersStore.filter })

  useOrdersDialogCreation({ order: _order })
    .onOk(({ appliedOrder }: { appliedOrder: ordersDto.IOrder }) => {
      if (appliedOrder._id) {
        ordersStore.updateOne(appliedOrder)
      } else {
        ordersStore.createOne(appliedOrder)
      }
    })
}

function onRemove (_id: string) {
  useCustomDialogConfirmation({ message: 'Are you sure?' })
    .onOk(() => ordersStore.removeOne(_id))
}

function onCopyLink (link: string) {
  clipboardUtils.clip(link)
}

</script>

<style lang="sass">

//

</style>
