<template>

<div class="column typos">
  <TyposUi.H1 text="Headline 1 (TyposUi.H1)" />
  <TyposUi.H2 text="Headline 2 (TyposUi.H2)" />
  <TyposUi.H3 text="Headline 3 (TyposUi.H3)" />
  <TyposUi.H4 text="Headline 4 (TyposUi.H4)" />
  <TyposUi.H5 text="Headline 5 (TyposUi.H5)" />
  <TyposUi.H6 text="Headline 6 (TyposUi.H6)" />
  <TyposUi.Subtitle1 text="Subtitle 1 -- text-subtitle1 -- (TyposUi.Subtitle1)" />
  <TyposUi.Subtitle2 text="Subtitle 2 -- text-subtitle2 -- (TyposUi.Subtitle2)" />
  <TyposUi.Body1 text="Body 1 -- text-body1 --(TyposUi.Body1)" />
  <TyposUi.Body2 text="Body 2 -- text-body2 --(TyposUi.Body2)" />
  <TyposUi.Caption text="Caption -- text-caption --(TyposUi.Caption)" />
  <TyposUi.Overline text="Overline -- text-overline --(TyposUi.Overline)" />
</div>

<div class="row q-mt-md">
  <div class="column">
    <div class="text-weight-thin">font weight: text-weight-thin</div>
    <div class="ttext-weight-light">font weight: text-weight-light</div>
    <div class="text-weight-regular">font weight: text-weight-regular</div>
    <div class="text-weight-medium">font weight: text-weight-medium</div>
    <div class="text-weight-bold">font weight: text-weight-bold</div>
    <div class="text-weight-bolder">font weight: text-weight-bolder</div>
  </div>
  <div class="column q-ml-xl" style="min-width: 200px;">
    <div class="text-right">css helpers: Align text to the right</div>
    <div class="text-left">css helpers: Align text to the left</div>
    <div class="text-center">css helpers: Align text to the center</div>
    <div class="text-justify">css helpers: Text will be justified</div>
    <div class="text-bold">css helpers: Text will be in bold</div>
    <div class="text-italic">css helpers: Text will be in italic</div>
    <div class="text-no-wrap">css helpers: Non wrappable text (applies white-space: nowrap)</div>
    <div class="text-strike">css helpers: Applies text-decoration: line-through</div>
    <div class="text-uppercase">css helpers: Transform text to uppercase</div>
    <div class="text-lowercase">css helpers: Transform text to lowercase</div>
    <div class="text-capitalize">css helpers: Capitalize first letter of the text</div>
  </div>
</div>

</template>

<script lang="ts">

export default {
  name: 'TyposRoom',
  inheritAttrs: true,
}

</script>

<script setup lang="ts">

import { TyposUi } from '@/modules/gui/typos'

</script>

<style lang="sass" scoped>

.typos
  h1, h2, h3, h4, h5, h6, div
    margin: 16px 0

</style>
