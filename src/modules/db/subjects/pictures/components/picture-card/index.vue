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
      <ButtonUi.ButtonMiniEdit @click="onEdit" />
      <ButtonUi.ButtonMiniCopy :clip-value="imageSrc" />
      <q-space />
      <ButtonUi.ButtonMiniRemove @click="onRemove" />
    </q-card-actions>
  </q-card-section>

</q-card>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import useAppStore from '@/stores/app'
import { usePicturesStore } from '@/stores/pictures'

import { ButtonUi } from '@/modules/gui/button'
import { dialogsFabric, useCustomDialogConfirmation } from '@/modules/gui/dialog'
import {
  picturesConsts,
  picturesClasses,
  usePicturesDialogEditor,
} from '@/modules/db/subjects/pictures'

const appStore = useAppStore()
const picturesStore = usePicturesStore()

const props = defineProps<{
  picture: picturesClasses.IPicture,
}>()

const imageSrc = computed(() => `${appStore.filesStaticUrl.value}/${props.picture.dto.url}`)

function onFullscreen () {
  dialogsFabric.createShowImageDialog({ title: props.picture.dto.title, src: imageSrc.value })
}

function onEdit () {
  usePicturesDialogEditor({ picture: props.picture })
    .onOk(({ appliedPicture }: { appliedPicture: picturesClasses.IPicture }) => {
      picturesStore.updateOne(appliedPicture)
    })
}

function onRemove () {
  useCustomDialogConfirmation({ message: picturesConsts.MESSAGES.DELETE_CONFIRMATION })
    .onOk(() => picturesStore.removeOne(props.picture._id))
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
