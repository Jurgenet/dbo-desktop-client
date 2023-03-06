export const COLUMN_TYPES = {
  ROW: 'ROW',
  COVER: 'COVER',
  COPIABLE: 'COPIABLE',
  BADGES: 'BADGES',
  ACTIONS: 'ACTIONS',
}

export const COLUMN_DEFAULT = {
  type: COLUMN_TYPES.ROW,
  required: false,
  label: '',
  align: 'left',
  sortable: false,
  sort: (a: string, b: string /*, rowA, rowB */) => parseInt(a, 10) - parseInt(b, 10),
  format: (val: unknown /*, row */) => val,
  style: '', // width: 500px
  classes: '',
  headerStyle: '', // 'width: 500px'
  headerClasses: '',
}

export const COLUMN_ID = {
  ...COLUMN_DEFAULT,
  name: '_id',
  label: 'ID',
  field: '_id',
}

export const COLUMN_TITLE = {
  ...COLUMN_DEFAULT,
  name: 'title',
  label: 'Title',
  field: 'title',
}

export const COLUMN_ACTIONS = {
  ...COLUMN_DEFAULT,
  type: COLUMN_TYPES.ACTIONS,
  name: 'actions',
  classes: 'TableCellFullWidth',
}
