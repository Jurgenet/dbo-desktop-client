import { markersClasses } from '@/modules/db/subjects/markers'

export function getColumns () {
  return [
    {
      name: '_id',
      required: true,
      label: 'ID',
      align: 'left',
      field: (row: markersClasses.IMarker) => row._id,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'group',
      required: true,
      label: 'Group',
      align: 'left',
      field: (row: markersClasses.IMarker) => row.dto.group,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'ancestor',
      required: true,
      label: 'Ancestor',
      align: 'left',
      field: (row: markersClasses.IMarker) => row.dto.ancestor,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'bgColor',
      required: true,
      label: 'Background Color',
      align: 'left',
      field: (row: markersClasses.IMarker) => row.dto?.bgColor || '-',
      format: (val: string) => val,
      sortable: true,
    },
    {
      name: 'textColor',
      required: true,
      label: 'Text Color',
      align: 'left',
      field: (row: markersClasses.IMarker) => row.dto.textColor || '-',
      format: (val: string) => val,
      sortable: true,
    },
    {
      name: 'example',
      required: false,
      label: 'Example',
      align: 'left',
      sortable: false,
    },
    {
      name: 'actions',
      required: false,
      label: '',
      align: 'left',
      sortable: false,
      classes: 'TableCellFullWidth',
    },
  ]
}
