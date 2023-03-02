<template>

<q-card-section
:horizontal="horizontal"
:tag="tag"
>
  <slot />
</q-card-section>

</template>

<script lang="ts">

export default {
  name: 'CardSection',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

withDefaults(defineProps<{
  // Display a horizontal section (will have no padding and can contain other QCardSection)
  horizontal?: boolean
  // HTML tag to use [div/span/form/...]
  tag?: string
}>(), {
  tag: 'div',
  horizontal: false,
})

</script>
