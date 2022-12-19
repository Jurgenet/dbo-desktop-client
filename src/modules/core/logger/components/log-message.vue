<template>

<q-chat-message
  v-bind="message"
  label-html
  name-html
  text-html
  stamp-html
/>

</template>

<script setup lang="ts">

import { loggerDto } from '@/modules/core/logger'

defineProps<{
  message: loggerDto.IMessage
}>()

</script>
