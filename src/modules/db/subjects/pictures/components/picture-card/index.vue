<template>

<q-card class="pictureCard" flat bordered>

  <q-card-section horizontal>

    <q-img :src="imageSrc" @click="onFullscreen">
      <q-icon class="absolute all-pointer-events" size="24px" name="info" color="grey" style="top: 8px; left: 8px">
        <q-tooltip>
          {{ picture.dto.title }}
        </q-tooltip>
      </q-icon>
    </q-img>

    <q-card-actions vertical class="justify-start q-px-md">
      <q-btn flat round color="accent" icon="edit" @click="onEdit" />
      <q-btn flat round color="primary" icon="content_copy" @click="onCopyUrl" />
    </q-card-actions>

  </q-card-section>

  <q-card-section>
    <div class="text-subtitle2">{{ picture.dto.group }}</div>
    <!-- <div>{{ picture.dto.markers }}</div> -->
  </q-card-section>

</q-card>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import useAppStore from '@/stores/app'
import { usePicturesStore } from '@/stores/pictures'

import { dialogsFabrics } from '@/modules/gui/dialogs'
import { clipboardUtils } from '@/modules/core/clipboard'
import { picturesClasses, usePicturesDialogEditor } from '@/modules/db/subjects/pictures'

const appStore = useAppStore()
const picturesStore = usePicturesStore()

const props = defineProps<{
  picture: picturesClasses.IPicture,
}>()

const imageSrc = computed(() => `${appStore.filesStaticUrl.value}/${props.picture.dto.url}`)

function onFullscreen () {
  dialogsFabrics.createShowImageDialog({ title: props.picture.dto.title, src: imageSrc.value })
}

function onEdit () {
  usePicturesDialogEditor({ picture: props.picture })
    .onOk(({ appliedPicture }: { appliedPicture: picturesClasses.IPicture }) => {
      picturesStore.updateOne(appliedPicture)
    })
}

function onCopyUrl () {
  clipboardUtils.clip(imageSrc.value)
}

</script>

<script lang="ts">

export default {
  name: 'PictureCard',
  inheritAttrs: false,
}

</script>

<style lang="sass">

.pictureCard
  width: 100%
  max-width: 350px
</style>
