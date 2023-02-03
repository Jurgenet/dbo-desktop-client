import { INoteLink } from './notes.classes'

export interface INoteDto {
  _id?: string
  title: string
  text: string
  links: INoteLink[]
  markers: string[]
  isPinned: boolean
}
