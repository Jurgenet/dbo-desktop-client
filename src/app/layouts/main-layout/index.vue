<template>

<q-layout view="hHh LpR fFf">

  <MainHeader />

  <LeftDrawer />

  <q-page-container>
    <suspense>
      <template #default>
        <router-view />
      </template>
    </suspense>
  </q-page-container>

  <MainFooter />

</q-layout>

</template>

<script setup lang="ts">

import MainHeader from './main-header/index.vue'
import LeftDrawer from './left-drawer/index.vue'
import MainFooter from './main-footer/index.vue'

</script>
