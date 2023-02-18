<template>

<q-toggle
  v-model="isProdServer"
  :label="`On ${serverName} Server`"
  class="q-pa-sm"
/>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const { isProdServer, serverName } = useAppStore()

</script>
