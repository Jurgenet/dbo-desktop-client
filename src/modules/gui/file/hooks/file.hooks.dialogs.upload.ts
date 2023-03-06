import { Dialog } from 'quasar'

import { FileUi } from '@/modules/gui/file'

export default function useFileDialogUpload () {
  return Dialog.create({
    component: FileUi.FileDialogUploader,
    componentProps: {},
    cancel: true,
    persistent: true,
  })
}
