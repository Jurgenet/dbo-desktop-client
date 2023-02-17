<template>

<q-dialog ref="dialogRef" persistent>
  <q-card style="min-width: 600px">

    <q-card-section>
      <div class="text-h6">Account {{ isCreating ? 'Creating' : 'Updating' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="column q-gutter-sm">

        <InputsUi.RegularInput
          v-model="accountRef.dto.title"
          :rules="[(val: string) => !!val || 'Field is required']"
          label="Title"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.group"
          label="Group"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.email"
          label="Email"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.login"
          label="Login"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.password"
          label="Password"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.link"
          label="Link"
        />
        <InputsUi.RegularInput
          v-model="accountRef.dto.text"
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

import { accountsClasses } from '@/modules/db/subjects/accounts'

const props = defineProps<{ isCreating: boolean, account: accountsClasses.IAccount }>()
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()

const accountRef = ref(props.account as accountsClasses.IAccount)

function onApply () {
  if (accountRef.value.dto.title) {
    onDialogOK({ appliedAccount: accountRef.value })
  }
}

</script>
