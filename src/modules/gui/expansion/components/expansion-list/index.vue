<template>

<q-list class="rounded-borders" bordered>
  <slot />
</q-list>

</template>

<script lang="ts">

export default {
  name: 'ExpansionList',
  inheritAttrs: true,
}

</script>
