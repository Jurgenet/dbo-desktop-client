export interface IAccount {
  _id: string
  title: string
  markers: string[]
  group?: string
  email?: string
  login?: string
  password?: string
  link?: string
  text?: string
}

export type IAccountDraft = Omit<IAccount, '_id'>

export function createEmpty (): IAccountDraft {
  return {
    title: '',
    markers: [],
    group: '',
    email: '',
    login: '',
    password: '',
    link: '',
    text: '',
  }
}

export function create (fields: Partial<IAccountDraft>): IAccountDraft {
  return {
    ...createEmpty(),
    ...fields,
  }
}
