<template>

<q-tab-panel :name="name">
  <slot />
</q-tab-panel>

</template>

<script lang="ts">

export default {
  name: 'TabPanel',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

defineProps<{
  name: string
}>()

</script>
