<template>

<div>
  <ExpansionUi.ExpansionList>

    <ExpansionUi.Expansion label="Expansion 1" icon="drafts" caption="caption" is-opened>
      <div>Expansion Content</div>
    </ExpansionUi.Expansion>

    <ExpansionUi.Expansion label="Expansion 2" icon="assessment" is-opened>
      <div>Expansion Content</div>
    </ExpansionUi.Expansion>

  </ExpansionUi.ExpansionList>
</div>

</template>

<script lang="ts">

export default {
  name: 'ExpansionsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ExpansionUi } from '@/modules/gui/expansion'

</script>
