<template>

<q-item clickable tabindex="0">

  <q-item-section avatar>
    <q-avatar :icon="icon" color="secondary" text-color="white" size="36px" />
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ title }}</q-item-label>
  </q-item-section>

</q-item>

</template>

<script setup lang="ts">

withDefaults(defineProps<{
  title: string,
  icon?: string,
}>(), {
  icon: 'push_pin',
})

</script>
