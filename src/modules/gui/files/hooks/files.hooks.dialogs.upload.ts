import { Dialog } from 'quasar'

import { FilesUi } from '@/modules/gui/files'

export default function useFilesDialogUpload () {
  return Dialog.create({
    component: FilesUi.FileDialogUploader,
    componentProps: {},
    cancel: true,
    persistent: true,
  })
}
