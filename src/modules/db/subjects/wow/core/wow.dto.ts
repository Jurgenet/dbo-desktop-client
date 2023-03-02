import { ISubjectTypes } from './wow.classes'

export interface ISubjectDto {
  type: ISubjectTypes
  _id?: string
  globalId?: string
  titleEn?: string
  titleRu?: string
  cover?: string
  price?: number
  text?: string
  professions?: string[]
  options?: object
  zone?: string
  person?: string
  ancestor?: string
}
