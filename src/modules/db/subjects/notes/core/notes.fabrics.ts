import { INote, INoteLink, Note } from './notes.classes'
import { DEFAULT_MARKER } from './notes.consts'
import { INoteDto } from './notes.dto'

export function create (dto: Partial<INoteDto>): INote {
  return new Note({
    title: 'empty',
    text: '',
    links: [],
    markers: [DEFAULT_MARKER],
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
