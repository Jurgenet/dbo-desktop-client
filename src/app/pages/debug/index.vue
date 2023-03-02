<template>

<PagesUi.Page no-padding>

  <BarsUi.Top title="Session log">
    <template #right>
      <div class="row q-gutter-x-sm">
        <ButtonUi.Button label="send test notices" dense disable @click="onSendTestMessages" />
      </div>
    </template>
  </BarsUi.Top>

  <div class="q-pa-md flex justify-center items-end" style="width: 100%">
    <div class="col" style="width: 100%">
      <LoggerUi.LogMessage v-for="message, index in messages" :key="`msg-${index}`" :message="message" />
    </div>
  </div>

</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'DebugPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { PagesUi } from '@/modules/gui/pages'
import { BarsUi } from '@/modules/gui/bars'
import { ButtonUi } from '@/modules/gui/buttons'
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
