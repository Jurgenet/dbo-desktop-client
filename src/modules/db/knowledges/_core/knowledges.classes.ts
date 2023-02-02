import { IKnowledgeDto } from "./knowledges.dto"

export interface IKnowledge {
  _id: string
  dto: IKnowledgeDto
}

export enum IKnowledgeLangs {
  EN = 'en',
  RU = 'ru',
}

export enum IKnowledgeTypes {
  NA = 'na',
  Book = 'book',
  Video = 'video',
  Course = 'course',
  Post = 'post',
}

export class Knowledge {
  _id: string
  dto: IKnowledgeDto

  constructor (dto: IKnowledgeDto) {
    this._id = dto._id
    this.dto = dto
  }
}
