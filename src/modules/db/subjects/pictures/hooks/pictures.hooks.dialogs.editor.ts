import { Dialog } from 'quasar'

import { picturesClasses, PicturesUi } from '@/modules/db/subjects/pictures'

export default function usePicturesDialogEditor ({ picture }: { picture: picturesClasses.IPicture }) {
  return Dialog.create({
    component: PicturesUi.PictureDialogEditor,
    componentProps: {
      picture,
    },
    cancel: true,
    persistent: true,
  })
}
