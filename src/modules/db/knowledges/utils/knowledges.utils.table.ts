import { knowledgesClasses } from '@/modules/db/knowledges'

export function getColumns () {
  return [
    // {
    //   name: '_id',
    //   required: true,
    //   label: '_id',
    //   align: 'left',
    //   field: (row: knowledgesClasses.IKnowledge) => row._id,
    //   format: (val: string) => `${val}`,
    //   sortable: false,
    // },
    {
      name: 'type',
      required: true,
      label: 'Type',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.type,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'group',
      required: true,
      label: 'Group',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.group,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'date',
      required: true,
      label: 'Date',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.date,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'title',
      required: true,
      label: 'Title',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.title,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'platform',
      required: true,
      label: 'Platform',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.platform,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'author',
      required: true,
      label: 'Author',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.author,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'lang',
      required: true,
      label: 'Lang',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.lang,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'cover',
      required: true,
      label: 'Cover',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.cover,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'location',
      required: true,
      label: 'Location',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.location,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    {
      name: 'link',
      required: true,
      label: 'Link',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.link,
      format: (val: string) => `${val}`,
      sortable: false,
    },
    // {
    //   name: 'text',
    //   required: true,
    //   label: 'Text',
    //   align: 'left',
    //   field: (row: knowledgesClasses.IKnowledge) => row.dto.text,
    //   format: (val: string) => `${val}`,
    //   sortable: false,
    // },
    {
      name: 'isActive',
      type: 'flag',
      required: true,
      label: 'isActive',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.isActive,
      sortable: false,
    },
    {
      name: 'isOnline',
      type: 'flag',
      required: true,
      label: 'isOnline',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.isOnline,
      sortable: false,
    },
    {
      name: 'isDone',
      type: 'flag',
      required: true,
      label: 'isDone',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.isDone,
      sortable: false,
    },
    // {
    //   name: 'markers',
    //   required: true,
    //   label: 'Markers',
    //   align: 'left',
    //   field: (row: knowledgesClasses.IKnowledge) => row.dto.markers,
    //   format: (val: string[]) => `${val}`,
    //   sortable: false,
    // },
    {
      name: 'rating',
      required: true,
      label: 'Rating',
      align: 'left',
      field: (row: knowledgesClasses.IKnowledge) => row.dto.rating,
      format: (val: number) => `${val}`,
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
