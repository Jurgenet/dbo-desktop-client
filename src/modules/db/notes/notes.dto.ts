export interface INoteLink {
  label: string
  reference: string
}

export interface INote {
  _id: string
  title: string
  markers: string[]
  isPinned: string
  text?: string
  links?: INoteLink[]
}

export type INoteDraft = Omit<INote, '_id'>

export function createEmpty (): INoteDraft {
  return {
    title: '',
    markers: [],
    isPinned: 'false',
    text: '',
    links: [],
  }
}

export function create (fields: Partial<INoteDraft>): INoteDraft {
  return {
    ...createEmpty(),
    ...fields,
  }
}

export function createLink (label: string, reference: string): INoteLink {
  return {
    label: label ?? '',
    reference: reference ?? '',
  }
}
