<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Order {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.Regular
          v-model="orderRef.dto.date"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Date"
        />

        <InputsUi.Regular
          v-model="orderRef.dto.group"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Group"
        />

        <InputsUi.Regular
          v-model="orderRef.dto.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />

        <InputsUi.Regular
          v-model.number="orderRef.dto.price"
          type="number"
          label="Price"
        />

        <InputsUi.Regular
          v-model.number="orderRef.dto.amount"
          type="number"
          label="Amount"
        />

        <InputsUi.Regular
          v-model="orderRef.dto.vendor"
          label="Vendor"
        />

        <InputsUi.Regular
          v-model="orderRef.dto.seller"
          label="Seller"
        />

        <InputsUi.Regular
          v-model="orderRef.dto.link"
          label="Link"
        />

        <!-- <q-input
          v-model="orderRef.dto.markers"
          placeholder="markers"
          dense
          autofocus
        /> -->

        <InputsUi.Regular
          v-model="orderRef.dto.text"
          label="Text"
          type="textarea"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" @click="onDialogHide" />
      <q-btn flat label="Apply Changes" @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { InputsUi } from '@/modules/gui/inputs'

import { ordersClasses } from '@/modules/db/orders'

const props = defineProps<{ isCreating: boolean, order: ordersClasses.IOrder }>()
defineEmits([...useDialogPluginComponent.emits])

console.log(props.order)

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const orderRef = ref(props.order as ordersClasses.IOrder)

function onApply () {
  if (orderRef.value.dto.title) {
    onDialogOK({ appliedOrder: orderRef.value })
  }
}

</script>
