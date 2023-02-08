<template>

<!-- actions -->
<div v-if="col.name === 'actions'" class="row justify-end no-wrap">
  <ButtonsUi.TypedButton
    :type="ButtonsUi.TypedButtonType.TableCellActionEdit"
    @click="emits('edit', row)"
  />
  <ButtonsUi.TypedButton
    :type="ButtonsUi.TypedButtonType.TableCellActionDelete"
    @click="emits('remove', row._id)"
  />
</div>

<!-- link -->
<div v-else-if="col.name === 'link'" class="row no-wrap">
  <ButtonsUi.TypedButton
    v-show="row.dto.link"
    :type="ButtonsUi.TypedButtonType.TableCellActionReference"
    @click="emits('copy-reference', row.dto.link)"
  >
    <q-tooltip class="text-caption">{{ row.dto.link }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- location -->
<div v-else-if="col.name === 'location'" class="row no-wrap">
  <ButtonsUi.TypedButton
    v-show="row.dto.location"
    :type="ButtonsUi.TypedButtonType.TableCellActionReference"
    @click="emits('copy-reference', row.dto.location)"
  >
    <q-tooltip class="text-caption">{{ row.dto.location }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- pasword -->
<div v-else-if="col.name === 'password'" class="row no-wrap">
  <ButtonsUi.TypedButton
    v-show="row.dto.password"
    :type="ButtonsUi.TypedButtonType.TableCellActionPassword"
    @click="emits('copy-reference', row.dto.password)"
  >
    <q-tooltip class="text-caption">{{ row.dto.password }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- rating -->
<div v-else-if="col.name === 'rating'">
  <RatingsUi.RegularRating :model-value="row.dto.rating" readonly />
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

import { ButtonsUi } from '@/modules/gui/buttons'
import { RatingsUi } from '@/modules/gui/ratings'

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
