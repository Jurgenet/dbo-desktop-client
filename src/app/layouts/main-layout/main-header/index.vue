<template>

<q-header class="bg-primary text-white" height-hint="98" elevated>
  <q-toolbar>

    <ButtonUi.Button icon="menu" round flat @click="toggleLeftDrawer" />

    <SeparatorsUi.RegularSeparator dark />

    <q-toolbar-title>
      <router-link :to="routes.ROOT" class="NoLinkStyles">
        {{ appConsts.APP_NAME }}
      </router-link>
    </q-toolbar-title>

    <SeparatorsUi.RegularSeparator dark />

    <ButtonUi.ButtonRoute :to="routes.SETTINGS" label="Settings" flat />

    <SeparatorsUi.RegularSeparator dark />

    <ButtonUi.ButtonRoute :to="routes.DUBUG" label="DUBUG" flat />

    <SeparatorsUi.RegularSeparator dark />

    <div class="q-ml-md">
      Quasar <q-badge class="q-ml-sm" color="purple-6">v{{ $q.version }}</q-badge>
    </div>

  </q-toolbar>
</q-header>

</template>

<script setup lang="ts">

import { appConsts } from 'src/app'
import useAppStore from '@/stores/app'
import { ButtonUi } from '@/modules/gui/buttons'
import { SeparatorsUi } from '@/modules/gui/separators'

const { routes, toggleLeftDrawer } = useAppStore()

</script>
