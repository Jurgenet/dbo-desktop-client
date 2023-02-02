import { IOrderDto } from './orders.dto'

export interface IOrder {
  _id?: string
  dto: IOrderDto
}

export class Order implements IOrder {
  _id?: string
  dto: IOrderDto

  constructor (dto: IOrderDto) {
    this._id = dto._id
    this.dto = dto
  }
}
