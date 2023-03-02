import { IKnowledge, IKnowledgeLangs, IKnowledgeTypes, Knowledge } from './knowledges.classes'
import { IKnowledgeDto } from './knowledges.dto'

export function create (dto: Partial<IKnowledgeDto>): IKnowledge {
  return new Knowledge({
    type: IKnowledgeTypes.NA,
    group: '',
    date: '',
    title: '',
    platform: '',
    author: '',
    lang: IKnowledgeLangs.EN,
    cover: '',
    location: '',
    link: '',
    text: '',
    isActive: false,
    isOnline: false,
    isDone: false,
    markers: [],
    rating: 0,
    ...dto,
  })
}

export function clone (knowledge: IKnowledge): IKnowledge {
  return new Knowledge(structuredClone(knowledge.dto))
}
