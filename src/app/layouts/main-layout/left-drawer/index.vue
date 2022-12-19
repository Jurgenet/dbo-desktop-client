<template>

<q-drawer
  v-model="isLeftDrawerOpened"
  aria-label="Menu"
  class="bg-grey-1"
  show-if-above
  bordered
  elevated
>
  <q-list>
    <q-item-label class="text-grey-8" header>
      <MenuLink
        v-for="(link, index) in menuLinks" :key="`link-${index}`"
        :menu-link="link"
      />
    </q-item-label>
  </q-list>
</q-drawer>

</template>

<script lang="ts">

export default {
  name: 'DrawerLeft',
  inheritAttrs: false,
}

</script>

<script setup lang="ts">

import MenuLink from './menu-link.vue'

import useAppStore from '@/stores/app'

const { menuLinks, isLeftDrawerOpened } = useAppStore()

</script>
