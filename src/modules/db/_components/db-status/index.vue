<template>

<q-badge :color="serverColor">{{ serverName }}</q-badge>

</template>

<script setup lang="ts">

import useAppStore from '@/stores/app'

const { serverName, serverColor } = useAppStore()

</script>
