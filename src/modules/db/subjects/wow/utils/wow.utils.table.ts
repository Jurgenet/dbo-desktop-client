import { tableConsts } from 'src/modules/gui/tables'
import { wowClasses } from '@/modules/db/subjects/wow'

export function getColumns () {
  return [
    {
      ...tableConsts.COLUMN_DEFAULT,
      name: 'type',
      required: true,
      label: 'Type',
      field: (row: wowClasses.ISubject) => row.dto.type,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.COPIABLE,
      name: 'globalId',
      label: 'GID',
      field: (row: wowClasses.ISubject) => row.dto.globalId,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.COPIABLE,
      name: 'titleEn',
      label: 'Title (en)',
      field: (row: wowClasses.ISubject) => row.dto.titleEn,
      format: (val: string) => `${val}`,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'titleRu',
      label: 'Title (ru)',
      field: (row: wowClasses.ISubject) => row.dto.titleRu,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.COVER,
      name: 'cover',
      label: 'Сover',
      field: (row: wowClasses.ISubject) => row.dto.cover,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'price',
      label: 'Price',
      field: (row: wowClasses.ISubject) => row.dto.price,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'professions',
      label: 'Professions',
      field: (row: wowClasses.ISubject) => row.dto.professions,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'options',
      label: 'Options',
      field: (row: wowClasses.ISubject) => row.dto.options,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'zone',
      label: 'Zone',
      field: (row: wowClasses.ISubject) => row.dto.zone,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'person',
      label: 'Person',
      field: (row: wowClasses.ISubject) => row.dto.person,
    },
    {
      ...tableConsts.COLUMN_DEFAULT,
      type: tableConsts.COLUMN_TYPES.ROW,
      name: 'ancestor',
      label: 'Ancestor',
      field: (row: wowClasses.ISubject) => row.dto.ancestor,
    },
    tableConsts.COLUMN_ACTIONS,
  ]
}
