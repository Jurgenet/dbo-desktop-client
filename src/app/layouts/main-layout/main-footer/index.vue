<template>

<q-footer class="bg-grey-8 text-white" bordered>
  <div class="wrapper">
    <div class="toolbar">

      <q-toolbar class="col-8 bg-grey-3 text-black">

        <DbUi.DbMenuDropdown />

        <q-space />

        <SeparatorsUi.RegularSeparator />

        <ButtonUi.Button :to="routes.SHOWROOM" label="Showroom" stretch flat />

      </q-toolbar>

      <q-toolbar>

        <q-space />

        <div class="timeClock">
          <TimeClock />
        </div>

      </q-toolbar>

    </div>
  </div>
</q-footer>

</template>

<script setup lang="ts">

import TimeClock from './time-clock.vue'

import useAppStore from '@/stores/app'

import { ButtonUi } from '@/modules/gui/buttons'
import { SeparatorsUi } from '@/modules/gui/separators'
import { DbUi } from '@/modules/db'

const { routes } = useAppStore()

</script>

<style lang="sass">

.wrapper
  display: flex
  flex-direction: column

.toolbar
  flex: 1

.timeClock
  display: flex
  padding: 12px

  align-items: center

</style>
