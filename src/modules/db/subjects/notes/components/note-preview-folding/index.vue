<template>

<q-expansion-item
  v-model="isExpanded"
  :label="note.dto.title"
  class="noteCard"
>

  <template v-slot:header>

    <q-item-section @dblclick.stop="emits('edit', note._id)">
      <div class="text-h6 text-blue-9 q-mt-sm">{{ note.dto.title }}</div>
    </q-item-section>

    <q-space />

    <q-item-section side class="badgesSection">
      <div class="q-py-md row justify-end items-center q-gutter-sm">
        <MarkersUi.MarkersBadgeList :markers-ids="note.dto.markers" />
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="q-ml-sm q-gutter-sm row items-center cardActions">
        <ButtonUi.ButtonMiniForward @click.stop="emits('open', note, false)" />
        <ButtonUi.ButtonMiniOpenTab @click.stop="emits('open', note, true)" />
      </div>
    </q-item-section>

  </template>

  <q-separator />

  <q-card v-if="isExpanded">
    <q-card-section>
      <EditorUi.MarkdownEditor :source="note.dto.text" />
    </q-card-section>
  </q-card>

</q-expansion-item>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { ButtonUi } from '@/modules/gui/button'
import { EditorUi } from '@/modules/gui/editor'
import { MarkersUi } from '@/modules/db/subjects/markers'
import { notesClasses } from '@/modules/db/subjects/notes'

defineProps<{
  note: notesClasses.INote
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'edit', noteId: string): void
  (e: 'open', notesClasses: notesClasses.INote, isInNew: boolean): void
}>()

const isExpanded = ref(false)

</script>

<style lang="sass" scoped>

.badgesSection
  max-width: 30%

.noteTextArea .q-field__native
  height: 50vh

</style>
