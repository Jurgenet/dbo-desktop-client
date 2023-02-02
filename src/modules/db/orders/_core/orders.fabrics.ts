import { IOrder, Order } from './orders.classes'
import { IOrderDto } from './orders.dto'

import { dateTimeGetters } from '@/modules/core/date-time'

export function create (dto: Partial<IOrderDto>): IOrder {
  return new Order({
    date: dateTimeGetters.getShortDate(new Date()),
    group: '',
    title: '',
    price: 0.0,
    amount: 1,
    vendor: '',
    seller: '',
    link: '',
    markers: [],
    text: '',
    ...dto,
  })
}

export function clone (order: IOrder): IOrder {
  return new Order({ ...order.dto })
}
