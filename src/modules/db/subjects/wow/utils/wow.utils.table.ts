import { wowClasses } from '@/modules/db/subjects/wow'

export function getColumns () {
  return [
    {
      name: 'type',
      required: true,
      label: 'Type',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.type,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'globalId',
      required: true,
      label: 'GID',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.globalId,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'titleEn',
      required: true,
      label: 'Title (en)',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.titleEn,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'titleRu',
      required: true,
      label: 'Title (ru)',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.titleRu,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'cover',
      required: true,
      label: 'Сover',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.cover,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'price',
      required: true,
      label: 'Price',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.price,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'professions',
      required: true,
      label: 'Professions',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.professions,
      format: (val: []) => `${val.join(', ')}`,
      sortable: false,
    },
    {
      name: 'options',
      required: true,
      label: 'Options',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.options,
      format: (val: []) => `${Object.keys(val).toString()}`,
      sortable: false,
    },
    {
      name: 'zone',
      required: true,
      label: 'Zone',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.zone,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'person',
      required: true,
      label: 'Person',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.person,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'ancestor',
      required: true,
      label: 'Ancestor',
      align: 'left',
      field: (row: wowClasses.ISubject) => row.dto.ancestor,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'actions',
      required: false,
      label: '',
      align: 'left',
      sortable: false,
    },
  ]
}
