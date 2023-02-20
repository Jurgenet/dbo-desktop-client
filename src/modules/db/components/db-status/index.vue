<template>

<q-badge :color="serverType.color">{{ serverType.label }}</q-badge>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const { serverType } = useAppStore()

</script>
