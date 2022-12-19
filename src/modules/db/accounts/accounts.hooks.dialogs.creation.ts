import { Dialog } from 'quasar'

import { accountsDto, AccountsUi } from '@/modules/db/accounts'

export default function useAccountsDialogCreation ({ account }: { account: accountsDto.IAccountDraft }) {
  return Dialog.create({
    component: AccountsUi.AccountDialogCreation,
    componentProps: {
      account,
    },
    cancel: true,
    persistent: true,
  })
}
