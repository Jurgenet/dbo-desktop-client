import { IKnowledgeTypes, IKnowledgeLangs } from "./knowledges.classes"

export interface IKnowledgeDto {
  _id?: string
  type: IKnowledgeTypes
  group: string
  date: string
  title: string
  platform: string
  author: string
  lang: IKnowledgeLangs
  cover: string
  location: string
  link: string
  text: string
  isActive: boolean
  isDone: boolean
  isOnline: boolean
  markers: string[]
  rating: number
}
