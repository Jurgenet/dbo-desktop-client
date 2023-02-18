<template>

<q-header class="bg-primary text-white" height-hint="98" elevated>
  <q-toolbar>

    <MenuButton @click="toggleLeftDrawer" />

    <SeparatorsUi.RegularSeparator dark />

    <q-toolbar-title>
      <router-link :to="routes.ROOT" class="NoLinkStyles">
        {{ appConsts.APP_NAME }}
      </router-link>
    </q-toolbar-title>

    <SeparatorsUi.RegularSeparator dark />

    <q-btn label="Settings" :to="routes.SETTINGS" flat stretch />

    <SeparatorsUi.RegularSeparator dark />

    <q-btn label="DUBUG" :to="routes.DUBUG" flat stretch />

    <SeparatorsUi.RegularSeparator dark />

    <div class="q-ml-md">
      Quasar <q-badge class="q-ml-sm" color="purple-6">v{{ $q.version }}</q-badge>
    </div>

  </q-toolbar>
</q-header>

</template>

<script setup lang="ts">

import MenuButton from './menu-button/index.vue'

import { appConsts } from 'src/app'
import useAppStore from '@/stores/app'

import { SeparatorsUi } from '@/modules/gui/separators'

const { routes, toggleLeftDrawer } = useAppStore()

</script>
