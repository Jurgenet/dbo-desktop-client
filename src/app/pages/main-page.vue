<template>

<q-page class="q-pa-md column">
  <div class="q-pa-sm">{{ appConsts.APP_NAME }}: {{ appConsts.APP_VERSION }}</div>
  <div class="q-pa-sm">Quasar: {{ $q.version }}</div>
</q-page>

</template>

<script setup lang="ts">

import { appConsts } from '@/app'

</script>
