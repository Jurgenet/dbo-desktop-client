<template>

<q-toggle
  v-model="isProdServer"
  :label="`On ${serverType.label} Server`"
  class="q-pa-sm"
/>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const { isProdServer, serverType } = useAppStore()

</script>
