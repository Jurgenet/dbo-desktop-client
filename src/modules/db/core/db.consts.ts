import { tableConsts } from '@/modules/gui/tables'

export const DB_API_URL = process.env.apiUrl
export const DB_TEST_API_URL = process.env.testApiUrl

export const MAIN_FILE_UPLOAD_URL = process.env.fileUploadUrl
export const TEST_FILE_UPLOAD_URL = process.env.testFileUploadUrl

export const ENDPOINTS = {
  SYSTEM: 'system',
  MARKERS: 'marker',
  ACCOUNTS: 'account',
  NOTES: 'note',
  ORDERS: 'order',
  KNOWLEDGES: 'knowledge',
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
