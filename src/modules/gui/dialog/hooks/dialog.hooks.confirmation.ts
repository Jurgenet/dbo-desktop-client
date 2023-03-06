import { Dialog } from 'quasar'

import { DialogUi } from '@/modules/gui/dialog'

export default function useCustomDialogConfirmation ({ message }: { message: string }) {
  return Dialog.create({
    component: DialogUi.DialogConfirmation,
    componentProps: {
      message,
    },
    cancel: true,
    persistent: true,
  })
}
