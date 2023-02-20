import { IPictureDto } from './pictures.dto'

export interface IPicture {
  _id?: string
  dto: IPictureDto
}

export class Picture implements IPicture {
  _id?: string
  dto: IPictureDto

  constructor (dto: IPictureDto) {
    this._id = dto._id
    this.dto = dto
  }
}
