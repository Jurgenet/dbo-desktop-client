<template>

<q-btn
  v-bind="$attrs"
  :to="to"
  :href="href"
  :label="label"
  :size="size"
  :align="align"
  :aria-label="ariaLabel"
  :icon="icon"
  :icon-left="iconLeft"
  :icon-right="iconRight"
  :side="side"
  :text-color="textColor"
  :color="color"
  :padding="padding"
  :style="style"
  :percentage="percentage"
  :no-caps="noCaps"
  :stack="stack"
  :outline="outline"
  :flat="flatRef"
  :dense="dense"
  :round="round"
  :rounded="rounded"
  :square="square"
  :stretch="stretch"
  :unelevated="unelevated"
  :glossy="glossy"
  :disable="disable"
  :loading="loading"
  :dark-percentage="darkPercentage"
  :ripple="ripple"
>
  <slot />

  <q-tooltip v-if="tooltip">{{ tooltip }}</q-tooltip>

  <template v-slot:loading>
    <q-spinner-facebook />
  </template>

</q-btn>

</template>

<script setup lang="ts">

import { computed } from 'vue'

// @see https://quasar.dev/vue-components/button

const props = withDefaults(defineProps<{
  // class?: string # reserved word
  // app route
  to?: string
  href?: string
  label?: string
  size?: string
  align?: 'left' | 'right' | 'between' | 'around' | 'center' | 'evenly'
  ariaLabel?: string
  icon?: string
  iconLeft?: string
  iconRight?: string
  side?: string
  textColor?: string
  color?: string
  padding?: string
  style?: string
  percentage?: number
  // No capitalizing label
  noCaps?: boolean
  // icon under text
  stack?: boolean
  // work only with flat = false
  outline?: boolean
  flat?: boolean
  dense?: boolean
  round?: boolean
  rounded?: boolean
  square?: boolean
  // fullheight in container
  stretch?: boolean
  unelevated?: boolean
  glossy?: boolean
  disable?: boolean
  loading?: boolean
  darkPercentage?: boolean
  ripple?: boolean | { color: string, center: boolean }
  //
  tooltip?: string
}>(), {
  flat: true,
  loading: false,
})

const flatRef = computed(() => props.outline ? false : props.flat)

</script>

<script lang="ts">

export default {
  name: 'ButtonRegular',
  inheritAttrs: true,
}

</script>
