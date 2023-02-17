<template>

<q-header class="bg-primary text-white" height-hint="98" elevated>
  <q-toolbar>

    <MenuButton @click="toggleLeftDrawer" />

    <q-toolbar-title>
      <router-link :to="routes.ROOT" class="NoLinkStyles">
        {{ appConsts.APP_NAME }}
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

import { appConsts } from 'src/app'
import useAppStore from '@/stores/app'

import { MarkersUi } from '@/modules/db/subjects/markers'

const { routes, toggleLeftDrawer } = useAppStore()

</script>
