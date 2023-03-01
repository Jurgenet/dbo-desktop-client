<template>

<PagesUi.Page>
  <div class="q-pa-sm">{{ appConsts.APP_NAME }}: {{ appConsts.APP_VERSION }}</div>
  <div class="q-pa-sm">Quasar: {{ $q.version }}</div>
</PagesUi.Page>

</template>

<script lang="ts">

export default {
  name: 'DashboardPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { PagesUi } from '@/modules/gui/pages'

import { appConsts } from '@/app'

</script>
