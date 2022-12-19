<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Order {{ orderRef._id ? 'Updating' : 'Creating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.Regular
          v-model="orderRef.date"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Date"
        />
        <InputsUi.Regular
          v-model="orderRef.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />
        <InputsUi.Regular
          v-model="orderRef.price"
          label="Price"
        />
        <InputsUi.Regular
          v-model="orderRef.amount"
          label="Amount"
        />
        <InputsUi.Regular
          v-model="orderRef.vendor"
          label="Vendor"
        />
        <InputsUi.Regular
          v-model="orderRef.seller"
          label="Seller"
        />

        <q-input
          v-model="orderRef.tags"
          placeholder="Tags"
          dense
          autofocus
        />

        <InputsUi.Regular
          v-model="orderRef.link"
          label="Link"
        />
        <InputsUi.Regular
          v-model="orderRef.text"
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

import { ordersDto } from '@/modules/db/orders'

const props = defineProps<{ order: ordersDto.IOrder }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const orderRef = ref(props.order as ordersDto.IOrder)

function onApply () {
  if (orderRef.value.title) {
    onDialogOK({ appliedOrder: orderRef.value })
  }
}

</script>
