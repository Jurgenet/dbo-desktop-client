import { dateTimeGetters } from '@/modules/core/date-time'

export interface IOrder {
  _id: string
  date: string
  title: string
  price: number
  amount: number
  vendor: string
  seller: string
  markers: []
  link: string
  text: string
}

export type IOrderDraft = Omit<IOrder, '_id'>

export function createEmpty (): IOrderDraft {
  return {
    date: dateTimeGetters.getShortDate(new Date()),
    title: '',
    price: 0.0,
    amount: 1,
    vendor: '',
    seller: '',
    markers: [],
    link: '',
    text: '',
  }
}

export function create (fields: Partial<IOrderDraft>): IOrderDraft {
  return {
    ...createEmpty(),
    ...fields,
  }
}
