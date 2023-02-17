import { Dialog } from 'quasar'

import { accountsClasses, AccountsUi } from '@/modules/db/subjects/accounts'

export default function useAccountsDialogCreation ({ isCreating, account }: { isCreating: boolean, account: accountsClasses.IAccount }) {
  return Dialog.create({
    component: AccountsUi.AccountDialogCreation,
    componentProps: {
      isCreating,
      account,
    },
    cancel: true,
    persistent: true,
  })
}
