<template>

<div>
  <q-tooltip>{{ now.date.row }}</q-tooltip>
  <div class="col">
    <div class="row justify-center">{{ now.day.positionInMonthAsString }}.{{ now.month.positionInYearAsString }}.{{ now.year.full }}</div>
    <div class="row justify-center">{{ now.day.name }}</div>
    <div class="row justify-center">{{ now.localTimeString }}</div>
  </div>
</div>

</template>

<script setup lang="ts">

import { useDateTimeClock } from '@/modules/core/date-time'

const { now } = useDateTimeClock()

</script>
