<template>

<!-- actions -->
<div v-if="col.name === 'actions'" class="row justify-end no-wrap">
  <ButtonUi.ButtonMiniEdit @click="emits('edit', row)" />
  <ButtonUi.ButtonMiniRemove @click="emits('remove', row._id)" />
</div>

<!-- link -->
<div v-else-if="col.name === 'link'" class="row no-wrap">
  <ButtonUi.ButtonMiniLink
    v-show="row.dto.link"
    :tooltip="row.dto.link"
    @click="emits('copy-reference', row.dto.link)"
  />
</div>

<!-- location -->
<div v-else-if="col.name === 'location'" class="row no-wrap">
  <ButtonUi.ButtonMiniLink
    v-show="row.dto.location"
    :tooltip="row.dto.location"
    @click="emits('copy-reference', row.dto.location)"
  />
</div>

<!-- pasword -->
<div v-else-if="col.name === 'password'" class="row no-wrap">
  <ButtonUi.ButtonMiniMask
    v-show="row.dto.password"
    :tooltip="row.dto.password"
    @click="emits('copy-reference', row.dto.password)"
  />
</div>

<!-- rating -->
<div v-else-if="col.name === 'rating'">
  <RatingUi.Rating :model-value="row.dto.rating" readonly />
</div>

<div v-else-if="col.type === 'flag'" class="row no-wrap">
  <q-icon v-if="col.value" name="check_circle_outline" size="1.5em" color="green-4" />
  <q-icon v-else name="highlight_off" size="1.5em" color="red-4" />
</div>

<!-- other as is as-->
<template v-else>
  {{ col.value }}
</template>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'
import { RatingUi } from '@/modules/gui/rating'

defineProps<{
  col: any
  row: { _id: string, dto: { link?: string, location?: string, password?: string, rating?: number } }
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'edit', row: { _id: string, dto: { link?: string } }): void
  (e: 'remove', id: string): void
  (e: 'copy-reference', reference?: string): void
}>()

</script>
