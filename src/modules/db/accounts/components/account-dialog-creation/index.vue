<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Account {{ accountRef._id ? 'Updating' : 'Creating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.Regular
          v-model="accountRef.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />
        <InputsUi.Regular
          v-model="accountRef.group"
          label="Group"
        />
        <InputsUi.Regular
          v-model="accountRef.email"
          label="Email"
        />
        <InputsUi.Regular
          v-model="accountRef.login"
          label="Login"
        />
        <InputsUi.Regular
          v-model="accountRef.password"
          label="Password"
        />
        <InputsUi.Regular
          v-model="accountRef.link"
          label="Link"
        />
        <InputsUi.Regular
          v-model="accountRef.text"
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

import { accountsDto } from '@/modules/db/accounts'

const props = defineProps<{ account: accountsDto.IAccount }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const accountRef = ref(props.account as accountsDto.IAccount)

function onApply () {
  if (accountRef.value.title) {
    onDialogOK({ appliedAccount: accountRef.value })
  }
}

</script>
