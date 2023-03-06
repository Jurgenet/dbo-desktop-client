<template>

<PageUi.Page>
  <div class="q-pa-sm">{{ appConsts.APP_NAME }}: {{ appConsts.APP_VERSION }}</div>
  <div class="q-pa-sm">Quasar: {{ $q.version }}</div>
</PageUi.Page>

</template>

<script lang="ts">

export default {
  name: 'DashboardPage',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { PageUi } from '@/modules/gui/page'

import { appConsts } from '@/app'

</script>
