<template>

<div>
  <SelectUi.Select
    v-model="selectRef"
    :options="['First', 'Second', 'Third']"
    label="select value"
  />
</div>

</template>

<script lang="ts">

export default {
  name: 'SelectsRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

import { SelectUi } from '@/modules/gui/select'

const selectRef = ref('')

</script>
