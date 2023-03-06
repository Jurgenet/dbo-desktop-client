<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Order {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputUi.Input
          v-model="orderRef.dto.date"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Date"
        />

        <InputUi.Input
          v-model="orderRef.dto.group"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Group"
        />

        <InputUi.Input
          v-model="orderRef.dto.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />

        <InputUi.Input
          v-model.number="orderRef.dto.price"
          type="number"
          label="Price"
        />

        <InputUi.Input
          v-model.number="orderRef.dto.amount"
          type="number"
          label="Amount"
        />

        <InputUi.Input
          v-model="orderRef.dto.vendor"
          label="Vendor"
        />

        <InputUi.Input
          v-model="orderRef.dto.seller"
          label="Seller"
        />

        <InputUi.Input
          v-model="orderRef.dto.link"
          label="Link"
        />

        <!-- <q-input
          v-model="orderRef.dto.markers"
          placeholder="markers"
          dense
          autofocus
        /> -->

        <InputUi.Input
          v-model="orderRef.dto.text"
          label="Text"
          type="textarea"
        />

      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <ButtonUi.ButtonCancel @click="onDialogHide" />
      <ButtonUi.ButtonOk @click="onApply" />
    </q-card-actions>

  </q-card>
</q-dialog>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { ButtonUi } from '@/modules/gui/button'
import { InputUi } from '@/modules/gui/input'

import { ordersClasses } from '@/modules/db/subjects/orders'

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
