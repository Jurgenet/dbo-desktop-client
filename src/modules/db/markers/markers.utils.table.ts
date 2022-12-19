import { markersDto } from '@/modules/db/markers'

export function getColumns () {
  return [
    // {
    //   name: '_id',
    //   required: true,
    //   label: '_id',
    //   align: 'left',
    //   field: (row: markersDto.IMarker) => row._id,
    //   format: (val: string) => `${val}`,
    //   sortable: false,
    // },
    {
      name: 'title',
      required: true,
      label: 'Title',
      align: 'left',
      field: (row: markersDto.IMarker) => row.title,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'group',
      required: true,
      label: 'Group',
      align: 'left',
      field: (row: markersDto.IMarker) => row.group,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'bgColor',
      required: true,
      label: 'Background Color',
      align: 'left',
      field: (row: markersDto.IMarker) => row.bgColor,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'textColor',
      required: true,
      label: 'Text Color',
      align: 'left',
      field: (row: markersDto.IMarker) => row.textColor,
      format: (val: string) => `${val}`,
      sortable: false,
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
