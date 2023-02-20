import { tableConsts } from '@/modules/gui/tables'

export const API_URL = process.env.apiUrl
export const FILES_UPLOAD_URL = process.env.filesUploadUrl
export const FILES_STATIC_URL = process.env.filesStaticUrl

export const DEV_API_URL = process.env.devApiUrl
export const DEV_FILES_UPLOAD_URL = process.env.devFilesUploadUrl
export const DEV_FILES_STATIC_URL = process.env.devFileStaticUrl

export const SERVER_TYPE = {
  live: {
    label: 'live',
    color: 'green',
  },
  dev: {
    label: 'dev',
    color: 'blue',
  },
}

export const ENDPOINTS = {
  SYSTEM: 'system',
  MARKERS: 'marker',
  ACCOUNTS: 'account',
  NOTES: 'note',
  ORDERS: 'order',
  KNOWLEDGES: 'knowledge',
  PICTURES: 'pictures',
}

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
    field: ({ markers }: { markers: string[] }) => markers.join(' '),
  },
}
