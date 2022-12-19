<template>

<q-btn
  :label="labelRef"
  :color="colorRef"
  :icon="iconRef"
  :size="sizeRef"
  :round="roundRef"
  :flat="flatRef"
>
  <slot />
  <q-tooltip v-if="tooltip">{{ tooltip }}</q-tooltip>
</q-btn>

</template>

<script lang="ts">

export const enum EType {
  Default,
  Create,
  TableCellActionEdit,
  TableCellActionDelete,
  TableCellActionReference,
  TableCellActionPassword,
  TableCellActionStyle,
}

</script>

<script setup lang="ts">

import { ref } from 'vue'

interface IProps {
  type?: EType
  label?: string
  color?: string
  icon?: string
  size?: string
  round?: boolean
  flat?: boolean
  tooltip?: string
}

const props = withDefaults(defineProps<IProps>(), {
  type: EType.Default,
  label: 'Click',
  round: false,
  flat: false,
})

const labelRef = ref(props.label)
const colorRef = ref(props.color)
const iconRef = ref(props.icon)
const sizeRef = ref(props.size)
const roundRef = ref(props.round)
const flatRef = ref(props.flat)

switch (props.type) {
  case EType.Create: {
    labelRef.value = 'Create'
    colorRef.value = 'primary'
    break
  }

  case EType.TableCellActionEdit: {
    setTableCellProperties()
    iconRef.value = 'create'

    break
  }

  case EType.TableCellActionDelete: {
    setTableCellProperties()
    iconRef.value = 'delete'
    break
  }

  case EType.TableCellActionReference: {
    setTableCellProperties()
    iconRef.value = 'link'
    sizeRef.value = '12px'
    break
  }

  case EType.TableCellActionPassword: {
    setTableCellProperties()
    iconRef.value = 'password'
    sizeRef.value = '12px'
    break
  }

  case EType.TableCellActionStyle: {
    setTableCellProperties()
    iconRef.value = 'style'
    sizeRef.value = '12px'
    break
  }

  default: break
}

function setTableCellProperties () {
  labelRef.value = ''
  colorRef.value = 'grey-8'
  sizeRef.value = '10px'
  roundRef.value = true
  flatRef.value = true
}

</script>
