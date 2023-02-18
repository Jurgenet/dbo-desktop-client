<template>

<q-btn-dropdown stretch flat>

  <template v-slot:label>
    <div class="row items-center no-wrap">
      <DbUi.DbStatus />
      <div class="q-ml-md text-center">Database</div>
    </div>
  </template>

  <q-list>

    <div class="q-ma-sm">
      <q-item-label header>Tables:</q-item-label>

      <MarkersUi.MarkersDialogTable>
        <DbUi.DbMenuDropdownItem title="Markers" />
      </MarkersUi.MarkersDialogTable>
    </div>

    <q-separator />

    <div>
      <q-item-label header>Settings:</q-item-label>

      <DbUi.DbSwitcher />
    </div>

  </q-list>

</q-btn-dropdown>

</template>

<script setup lang="ts">

import { DbUi } from '@/modules/db'
import { MarkersUi } from '@/modules/db/subjects/markers'

</script>
