<template>

<div class="row items-center">
  <div class="text-bold">Database on {{ serverName }} server</div>
  <q-toggle
    v-model="isProdServer"
    class="q-pa-sm"
  />
</div>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const { isProdServer, serverName } = useAppStore()

</script>
