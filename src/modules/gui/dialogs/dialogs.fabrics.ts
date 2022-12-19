import { Dialog } from 'quasar'

import { dialogsDto } from '@/modules/gui/dialogs'

export function createConfirmationDialog ({ title, message }: dialogsDto.IConfirmationDialogParams, confirmationCallback: () => void) {
  Dialog.create({
    title: title ?? 'Confirmation',
    message: message ?? 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    // console.log('>>>> OK')
    confirmationCallback()
  }).onOk(() => {
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    // console.log('>>>> I am triggered on both OK and Cancel')
  })
}
