<template>

<q-card class="pictureCard" flat bordered>

  <q-card-section class="q-pa-xs">

    <q-img :src="imageSrc" @click="onFullscreen">
      <q-icon class="absolute all-pointer-events" size="24px" name="info" color="grey" style="top: 8px; left: 8px">
        <q-tooltip>
          {{ picture.dto.title }}
        </q-tooltip>
      </q-icon>
    </q-img>

    <div class="row q-pa-xs text-subtitle2">{{ picture.dto.group }}</div>
    <q-space />
    <!-- <div>{{ picture.dto.markers }}</div> -->
    <q-card-actions class="justify-start q-pa-xs">
      <q-space />
      <ButtonUi.Button size="10px" icon="edit" round @click="onEdit" />
      <ButtonUi.ButtonCopyText :text="imageSrc" size="10px" icon="content_copy" round/>
    </q-card-actions>
  </q-card-section>

</q-card>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import useAppStore from '@/stores/app'
import { usePicturesStore } from '@/stores/pictures'

import { ButtonUi } from '@/modules/gui/buttons'
import { dialogsFabrics } from '@/modules/gui/dialogs'
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
