import { tableConsts } from '@/modules/gui/tables'

export const commonColumns = {
  type: {
    ...tableConsts.defaultColumns,
    name: 'type',
    label: 'Type',
    field: 'type',
  },
  title: {
    ...tableConsts.defaultColumns,
    name: 'title',
    label: 'Title',
    field: 'title',
  },
  markers: {
    ...tableConsts.defaultColumns,
    name: 'markers',
    label: 'Markers',
    field: (row) => row.markers.join(' '),
  },
}
