<template>

<q-td auto-width>
  <q-btn
    :icon="props.expand ? 'remove' : 'add'"
    :color="props.row.dto.text ? 'primary' : 'grey-5'"
    :disable="!props.row.dto.text"
    size="sm"
    round
    dense
    @click="emits('toggle')"
  />
</q-td>

</template>

<script setup lang="ts">

const props = defineProps<{
  expand: boolean
  row: { dto: { text: string } }
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'toggle'): void
}>()

</script>
