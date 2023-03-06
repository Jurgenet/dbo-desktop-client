<template>

<div class="row q-gutter-x-sm">

  <CardUi.Card topic="Some Topic">

    <CardUi.CardSection>
      <div>Section Content</div>
    </CardUi.CardSection>

    <CardUi.CardSection>
      <div>Other Section Content</div>
    </CardUi.CardSection>

  </CardUi.Card>

</div>

</template>

<script lang="ts">

export default {
  name: 'CardsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { CardUi } from '@/modules/gui/card'

</script>
