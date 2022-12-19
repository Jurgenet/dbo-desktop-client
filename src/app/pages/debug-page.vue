<template>

<q-page>

  <BarsUi.Top title="Session log">
    <template #right>
      <div class="row q-gutter-x-sm">
        <q-btn label="app busy" dense flat disable />
        <q-separator vertical />
        <q-btn label="send notices" class="gt-xs" dense flat @click="onSendTestMessages" />
      </div>
    </template>
  </BarsUi.Top>

  <div class="q-pa-md flex justify-center items-end" style="width: 100%">
    <div class="col" style="width: 100%">
      <LoggerUi.LogMessage v-for="message, index in messages" :key="`msg-${index}`" :message="message" />
    </div>
  </div>

</q-page>

</template>

<script setup lang="ts">

import { BarsUi } from '@/modules/gui/bars'

import { LoggerUi } from '@/modules/core/logger'
import { useLoggerStore } from '@/stores/logger'

const {
  messages,
  sendLabel,
  sendText,
  sendNotice,
  sendWarning,
  sendError,
  sendResponse,
  sendSpam,
} = useLoggerStore()

function onSendTestMessages () {
  sendLabel('Session log started: Sunday, 19th')
  sendText('Test Text!')
  sendNotice('Test Notice!', 'sender')
  sendWarning('Test Warning!')
  sendError('TestError!')
  sendResponse('Test Response!', 'sender')
  sendSpam('Test Spam!')
}

</script>
