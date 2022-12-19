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
    v-show="row.link"
    :type="ButtonsUi.TypedButtonType.TableCellActionReference"
    @click="emits('copy-reference', row.link)"
  >
    <q-tooltip class="text-caption">{{ row.link }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- location -->
<div v-else-if="col.name === 'location'" class="row no-wrap">
  <ButtonsUi.TypedButton
    v-show="row.location"
    :type="ButtonsUi.TypedButtonType.TableCellActionReference"
    @click="emits('copy-reference', row.location)"
  >
    <q-tooltip class="text-caption">{{ row.location }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- pasword -->
<div v-else-if="col.name === 'password'" class="row no-wrap">
  <ButtonsUi.TypedButton
    v-show="row.password"
    :type="ButtonsUi.TypedButtonType.TableCellActionPassword"
    @click="emits('copy-reference', row.password)"
  >
    <q-tooltip class="text-caption">{{ row.password }}</q-tooltip>
  </ButtonsUi.TypedButton>
</div>

<!-- other as is as-->
<template v-else>
  {{ col.value }}
</template>

</template>

<script setup lang="ts">

import { ButtonsUi } from '@/modules/gui/buttons'

defineProps<{
  col: any
  row: { _id: string, link?: string, location?: string, password?: string }
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'edit', row: { _id: string, link?: string }): void
  (e: 'remove', _id: string): void
  (e: 'copy-reference', reference?: string): void
}>()

</script>
