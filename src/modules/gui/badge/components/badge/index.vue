<template>

<q-badge
  :label="label"
  :color="color"
  :outline="outline"
>
  <slot />
</q-badge>

</template>

<script lang="ts">

export default {
  name: 'TheBadge',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

// with default props
withDefaults(defineProps<{
  label: string
  color?: string
  outline?: boolean
}>(), {
  color: 'primary',
  outline: false,
})

</script>
