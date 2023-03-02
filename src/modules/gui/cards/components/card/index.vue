<template>

<q-card
  :tag="tag"
  :dark="dark"
  :square="square"
  :flat="flat"
  :bordered="bordered"
>
  <CardsUi.CardSection v-if="topic">
    <TyposUi.Subtitle1 :text="topic" class="text-weight-bold" />
  </CardsUi.CardSection>
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

import { TyposUi } from '@/modules/gui/typos'
import { CardsUi } from '@/modules/gui/cards'

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
