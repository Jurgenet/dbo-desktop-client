<template>

<div>
  <div v-if="!isEmpty" class="column">
    <div class="q-mt-sm row items-center q-gutter-sm">
      <q-btn
        v-for="link, index in links" :key="`link-${index}`"
        :label="link.label"
        class="q-ml-sm q-mt-sm"
        size="sm"
        @click="onCopyReference(link.reference)"
      />
    </div>
  </div>
</div>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import { clipboardUtils } from '@/modules/core/clipboard'
import { notesDto } from '@/modules/db/subjects/notes'

const props = defineProps<{
  links: notesDto.INoteLink[]
}>()

const isEmpty = computed(() => {
  return props.links.length === 0
})

function onCopyReference (reference: string) {
  clipboardUtils.clip(reference)
}

</script>
