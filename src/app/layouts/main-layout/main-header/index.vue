<template>

<q-header class="bg-primary text-white" height-hint="98" elevated>
  <q-toolbar>

    <MenuButton @click="toggleLeftDrawer" />

    <q-toolbar-title>
      <router-link :to="routes.ROOT" class="NoLinkStyles">
        {{ appName }}
      </router-link>
    </q-toolbar-title>

    <q-separator dark vertical />
    <MarkersUi.MarkersDialogTable />

    <q-separator dark vertical />
    <q-btn label="Settings" :to="routes.SETTINGS" flat stretch />

    <q-separator dark vertical />
    <q-btn label="DUBUG" :to="routes.DUBUG" flat stretch />

  </q-toolbar>
</q-header>

</template>

<script setup lang="ts">

import MenuButton from './menu-button.vue'

import useAppStore from '@/stores/app'

import { MarkersUi } from '@/modules/db/markers'

const { appName, routes, toggleLeftDrawer } = useAppStore()

</script>
