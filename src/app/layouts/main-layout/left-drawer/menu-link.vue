<template>

<q-item :to="menuLink.link" tag="a" clickable>

  <q-item-section v-if="menuLink.icon" avatar>
    <q-icon :name="menuLink.icon" />
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ menuLink.title }}</q-item-label>
    <q-item-label caption>{{ menuLink.caption }}</q-item-label>
  </q-item-section>

</q-item>

</template>

<script setup lang="ts">

import { drawerDto } from '@/modules/gui/drawer'

defineProps<{
  menuLink: drawerDto.TDrawerMenuLink
}>()

</script>
