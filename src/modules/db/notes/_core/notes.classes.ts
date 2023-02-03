import { INoteDto } from './notes.dto'

export interface INoteLink {
  label: string
  reference: string
}

export interface INote {
  _id?: string
  dto: INoteDto
}

export class Note implements INote {
  _id?: string
  dto: INoteDto

  constructor (dto: INoteDto) {
    this._id = dto._id
    this.dto = dto
  }
}
