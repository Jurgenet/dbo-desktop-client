<template>

<div class="column typos">
  <TypoUi.H1 text="Headline 1 (TypoUi.H1)" />
  <TypoUi.H2 text="Headline 2 (TypoUi.H2)" />
  <TypoUi.H3 text="Headline 3 (TypoUi.H3)" />
  <TypoUi.H4 text="Headline 4 (TypoUi.H4)" />
  <TypoUi.H5 text="Headline 5 (TypoUi.H5)" />
  <TypoUi.H6 text="Headline 6 (TypoUi.H6)" />
  <TypoUi.Subtitle1 text="Subtitle 1 -- text-subtitle1 -- (TypoUi.Subtitle1)" />
  <TypoUi.Subtitle2 text="Subtitle 2 -- text-subtitle2 -- (TypoUi.Subtitle2)" />
  <TypoUi.Body1 text="Body 1 -- text-body1 --(TypoUi.Body1)" />
  <TypoUi.Body2 text="Body 2 -- text-body2 --(TypoUi.Body2)" />
  <TypoUi.Caption text="Caption -- text-caption --(TypoUi.Caption)" />
  <TypoUi.Overline text="Overline -- text-overline --(TypoUi.Overline)" />
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

import { TypoUi } from '@/modules/gui/typo'

</script>

<style lang="sass" scoped>

.typos
  h1, h2, h3, h4, h5, h6, div
    margin: 16px 0

</style>
