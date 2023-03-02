import { ISubject, ISubjectTypes, Subject } from './wow.classes'
import { ISubjectDto } from './wow.dto'

export function create (dto: Partial<ISubjectDto>): Subject {
  return new Subject({
    type: ISubjectTypes.Item,
    globalId: '',
    titleEn: '',
    titleRu: '',
    cover: '',
    price: 0,
    text: '',
    professions: [],
    options: {},
    zone: '',
    person: '',
    ancestor: '',
    ...dto,
  })
}

export function clone (subject: ISubject): ISubject {
  return new Subject(structuredClone(subject.dto))
}
