<template>

<div class="row q-gutter-x-md">
  <OptionUi.OptionGroup
    v-model="optionGroupRef"
    :options="options"
  />
  <OptionUi.OptionGroup
    v-model="optionGroupRef"
    :options="options"
    inline
  />
</div>

</template>

<script lang="ts">

export default {
  name: 'OptionsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

import { OptionUi, optionUtils } from '@/modules/gui/option'

const optionGroupRef = ref('op1')
const options = optionUtils.getOptionsFromList(['Option 1', 'Option 2', 'Option 3'])

</script>
