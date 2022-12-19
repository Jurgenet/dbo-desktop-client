<template>

<div>

  <div v-if="!isEmpty">
    <div>Links:</div>
    <div v-for="link, index in links" :key="`link-${index}`" class="q-mt-md row items-center q-gutter-x-sm">
      <div>{{index + 1}}. </div>
      <q-input v-model="link.label" class="col" outlined dense />
      <q-input v-model="link.reference" class="col" outlined dense />
      <q-btn class="removeButton" icon="delete" round size="sm" text-color="grey-6" @click="onRemoveLink(index)" />
    </div>
  </div>

  <div class="q-mt-md row items-center q-gutter-x-sm newLinkSection">
    <div>+. </div>
    <q-input v-model="labelRef" class="col" label="Label" outlined dense />
    <q-input v-model="referenceRef" class="col" label="Reference" outlined dense />
    <q-btn label="add link" @click="onAddLink" />
  </div>

</div>

</template>

<script setup lang="ts">

import { ref, computed } from 'vue'

import { notesDto } from '@/modules/db/notes'

const props = defineProps<{
  links: notesDto.INoteLink[]
}>()

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'change', links: notesDto.INoteLink[]): void
  (e: 'remove', index: number): void
}>()

const labelRef = ref('')
const referenceRef = ref('')

const isEmpty = computed(() => props.links.length === 0)

function onAddLink () {
  if (labelRef.value) {
    const links = [...props.links]
    links.push(notesDto.createLink(labelRef.value, referenceRef.value))

    emits('change', links)
    clear()
  }
}

function onRemoveLink (index: number) {
  const links = [...props.links]
  links.splice(index, 1)

  emits('change', links)
}

function clear () {
  labelRef.value = ''
  referenceRef.value = ''
}

</script>

<style lang="sass">

.removeButton
  margin-left: 70px

</style>
