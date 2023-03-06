<template>

<div class="row justify-between no-wrap notePreview">

  <div class="flex items-center">
    <div class="text-h6 text-blue-9">{{ note.dto.title }}</div>
  </div>

  <div class="row no-wrap badgesSection">

    <div class="q-py-md row justify-end items-center q-gutter-sm">
      <MarkersUi.MarkersBadgeList :markers-ids="note.dto.markers" />
    </div>

    <div class="separator" />

    <div class="q-gutter-sm row items-center no-wrap cardActions">

      <ButtonUi.ButtonMiniPin
        :is-pinned="note.dto.isPinned"
        @click.stop="emits('pin', note)"
      />

      <ButtonUi.ButtonMiniForward
        tooltip="open in a new tab"
        @click.stop="emits('open', note, false)"
      />

      <ButtonUi.ButtonMiniOpenTab
        tooltip="open in new tab in background"
        @click.stop="emits('open', note, true)"
      />

    </div>

  </div>

</div>

</template>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/button'
import { MarkersUi } from '@/modules/db/subjects/markers'
import { notesClasses } from '@/modules/db/subjects/notes'

defineProps<{
  note: notesClasses.INote
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'pin', noteId: string): void
  (e: 'edit', noteId: string): void
  (e: 'open', note: notesClasses.INote, isInBackground: boolean): void
}>()

</script>

<style lang="sass" scoped>

.notePreview
  border: 1px solid $grey-4
  border-radius: 5px
  padding-left: 12px
  padding-right: 12px

.separator
  margin: 0 14px
  width: 1px
  height: 100%
  background: $grey-4

.badgesSection
  max-width: 30%

</style>
