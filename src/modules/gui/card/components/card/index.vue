<template>

<q-card
  :tag="tag"
  :dark="dark"
  :square="square"
  :flat="flat"
  :bordered="bordered"
>
  <CardUi.CardSection v-if="topic">
    <TypoUi.Subtitle1 :text="topic" class="text-weight-bold" />
  </CardUi.CardSection>
  <slot />
</q-card>

</template>

<script lang="ts">

export default {
  name: 'TheCard',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { TypoUi } from '@/modules/gui/typo'
import { CardUi } from '@/modules/gui/card'

withDefaults(defineProps<{
  // content:
  // HTML tag to use [div/span/form/...]
  tag?: string
  // style:
  // Notify the component that the background is a dark color
  dark?: boolean
  // Removes border-radius so borders are squared
  square?: boolean
  // Applies a 'flat' design (no default shadow)
  flat?: boolean
  // Applies a default border to the component
  bordered?: boolean
  // CUSTOM:
  topic: string
}>(), {
  tag: 'div',
  dark: false,
  square: false,
  flat: false,
  bordered: false,
})

</script>
