import { INote, INoteLink, Note } from './notes.classes'
import { INoteDto } from './notes.dto'

export function create (dto: Partial<INoteDto>): INote {
  return new Note({
    title: 'empty',
    text: '',
    links: [],
    markers: [],
    isPinned: false,
    ...dto,
  })
}

export function createLink (label: string, reference: string): INoteLink {
  return {
    label: label ?? '',
    reference: reference ?? '',
  }
}
