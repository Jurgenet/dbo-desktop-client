<template>

<div class="row q-gutter-x-sm">

  <CardsUi.Card topic="Some Topic">

    <CardsUi.CardSection>
      <div>Section Content</div>
    </CardsUi.CardSection>

    <CardsUi.CardSection>
      <div>Other Section Content</div>
    </CardsUi.CardSection>

  </CardsUi.Card>

</div>

</template>

<script lang="ts">

export default {
  name: 'CardsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { CardsUi } from '@/modules/gui/cards'

</script>
