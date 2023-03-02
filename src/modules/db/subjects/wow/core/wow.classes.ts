import { ISubjectDto } from './wow.dto'

export const enum ISubjectTypes {
  Zone = 'zone',
  Quest = 'quest',
  Profession = 'profession',
  Item = 'item',
}

export interface ISubject {
  _id?: string
  dto: ISubjectDto
}

export class Subject implements ISubject {
  _id?: string
  dto: ISubjectDto

  constructor (dto: ISubjectDto) {
    this._id = dto._id
    this.dto = dto
  }
}
