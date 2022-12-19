<template>

<suspense>
  <template v-if="appStore.isReady">
    <router-view />
  </template>
</suspense>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const appStore = useAppStore()

</script>
