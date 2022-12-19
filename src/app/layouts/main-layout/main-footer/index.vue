<template>

<q-footer class="bg-grey-8 text-white" bordered>
  <div class="wrapper">
    <div class="toolbar">

      <q-toolbar class="col-8 bg-grey-3 text-black">

        <q-toolbar-title>@</q-toolbar-title>

        <q-space />

        <q-separator vertical inset />

        <q-btn label="Showroom" :to="routes.SHOWROOM" flat stretch />

      </q-toolbar>

      <q-toolbar>

        <q-btn flat round dense icon="whatshot">
          <q-badge floating color="red">0</q-badge>
        </q-btn>

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
