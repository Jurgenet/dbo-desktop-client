<template>

<q-page class="q-pa-md column">
  <slot name="before" />
  <q-page-sticky expand position="top" style="z-index: 1">
    <q-toolbar class="toolbar bg-white text-black">
      <div class="q-pa-md full-width">

        <slot name="middle-bar" />

        <div class="q-py-sm row">
          <div class="text-h2">{{ title }}</div>
        </div>

        <div class="q-pa-sm row q-gutter-x-sm">
          <slot name="actions" />
        </div>

        <slot name="bottom" />
      </div>
    </q-toolbar>
  </q-page-sticky>

  <div class="content">
    <slot name="content" />
  </div>

</q-page>

</template>

<script setup lang="ts">

withDefaults(defineProps<{
  title?: string
}>(), {
  title: '',
})

</script>

<style lang="sass" scoped>

.toolbar
  border-bottom: 1px solid $grey-4

.content
  margin-top: 150px
  max-width: 100%

</style>
