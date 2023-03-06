<template>

<ExpansionUi.ExpansionList>
  <ExpansionUi.Expansion label="Filters" icon="filter_list" is-opened>
    <div class="row q-gutter-x-lg items-center">

      <OptionUi.OptionGroup
        v-model="wowStore.filter"
        :options="filterOptions"
        inline
      />

      <SelectUi.Select
        v-model="wowStore.filter"
        :options="wowStore.professions"
        :use-chips="false"
        label="by profession"
        class="col-1"
      />

      <ButtonUi.Button label="Clear" @click="wowStore.filter = ''" />

    </div>

  </ExpansionUi.Expansion>
</ExpansionUi.ExpansionList>

</template>

<script lang="ts">

export default {
  name: 'WowFilters',
  inheritAttrs: false,
}

</script>

<script setup lang="ts">

import { useWowStore } from '@/stores/wow'

import { ExpansionUi } from '@/modules/gui/expansion'
import { OptionUi, optionUtils } from '@/modules/gui/option'
import { SelectUi } from '@/modules/gui/select'
import { ButtonUi } from '@/modules/gui/button'
import { wowClasses } from '@/modules/db/subjects/wow'

const wowStore = useWowStore()

const filterOptions = optionUtils.getOptionsFromList(Object.keys(wowClasses.ISubjectTypes))

</script>
