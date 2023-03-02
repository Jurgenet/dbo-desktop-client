import { IAccountDto } from './accounts.dto'
import { Account, IAccount } from './accounts.classes'

export function create (dto: Partial<IAccountDto>): IAccount {
  return new Account({
    group: '',
    email: '',
    login: '',
    password: '',
    link: '',
    markers: [],
    text: [],
    ...dto,
  })
}

export function clone (account: IAccount): IAccount {
  return new Account(structuredClone(account.dto))
}
