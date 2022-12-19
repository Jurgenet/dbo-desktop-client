export enum IKnowledgeLangs {
  EN = 'en',
  RU = 'ru',
}

export enum IKnowledgeTypes {
  NA = 'na',
  BOOK = 'book',
  VIDEO = 'video',
  COURSE = 'course',
  POST = 'post',
}

export interface IKnowledge {
  _id: string
  type: IKnowledgeTypes
  date: string
  title: string
  platform: string
  author: string
  lang: IKnowledgeLangs
  markers: string[]
  cover: string
  location: string
  link: string
  isActive: boolean
  isDone: boolean
  isOnline: boolean
  text: string
}

export type IKnowledgeDraft = Omit<IKnowledge, '_id'>

export function createEmpty (): IKnowledgeDraft {
  return {
    type: IKnowledgeTypes.NA,
    date: '',
    title: '',
    platform: '',
    author: '',
    lang: IKnowledgeLangs.EN,
    markers: [],
    cover: '',
    location: '',
    link: '',
    isActive: false,
    isDone: false,
    isOnline: false,
    text: '',
  }
}

export function create (fields: Partial<IKnowledgeDraft>): IKnowledgeDraft {
  return {
    ...createEmpty(),
    ...fields,
  }
}
