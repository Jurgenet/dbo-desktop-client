<template>

<div class="fullscreen flex flex-center bg-blue text-white text-center">
  <div>

    <div style="font-size: 30vh">404</div>

    <div class="text-h2" style="opacity:.4">Oops. Nothing here...</div>

    <ButtonUi.Button class="q-mt-xl bg-white" to="/" label="Go Home" text-color="primary" no-caps outline />

  </div>
</div>

</template>

<script lang="ts">

export default {
  name: 'Error404Page',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { ButtonUi } from '@/modules/gui/buttons'

</script>
