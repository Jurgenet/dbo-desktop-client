import { Dialog } from 'quasar'

import { DialogsUi } from '@/modules/gui/dialogs'

export default function useCustomDialogConfirmation ({ message }: { message: string }) {
  return Dialog.create({
    component: DialogsUi.DialogConfirmation,
    componentProps: {
      message,
    },
    cancel: true,
    persistent: true,
  })
}
