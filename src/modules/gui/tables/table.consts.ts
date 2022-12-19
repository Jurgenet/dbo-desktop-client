export const defaultColumns = {
  required: false,
  align: 'left',
  sortable: false,
  sort: (a: string, b: string /*, rowA, rowB */) => parseInt(a, 10) - parseInt(b, 10),
  sortOrder: 'ad', // or 'da'
  format: (val: unknown /*, row */) => val,
  style: '', // width: 500px
  classes: '',
  headerStyle: '', // 'width: 500px'
  headerClasses: '',
}

export const customColumns = {
  index: {
    ...defaultColumns,
    name: 'index',
    label: 'Index',
    field: 'index',
  },
  _id: {
    ...defaultColumns,
    name: '_id',
    label: 'Id',
    field: '_id',
  },
  controls: {
    ...defaultColumns,
    name: 'controls',
    classes: 'TableCellControls',
  },
  title: {
    ...defaultColumns,
    name: 'title',
    classes: '',
  },
}
