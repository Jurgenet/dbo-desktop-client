import { IAccountDto } from '@/modules/db/accounts'

export interface IAccount {
  _id?: string
  dto: IAccountDto
}

export class Account implements IAccount {
  _id?: string
  dto: IAccountDto

  constructor (dto: IAccountDto) {
    this._id = dto._id
    this.dto = dto
  }
}
