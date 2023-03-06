import { Dialog } from 'quasar'

import { dialogDto } from '@/modules/gui/dialog'

export function createConfirmationDialog ({ title, message }: dialogDto.IConfirmationDialogParams, confirmationCallback: () => void) {
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

export function createShowImageDialog ({ title, src }: { title: string, src: string }) {
  Dialog.create({
    title,
    html: true,
    message: `<div class="flex flex-center"><img src="${src}" /></div>`,
    style: 'width: auto; max-width: 100%;',
    persistent: false,
    ok: false,
  })
}
