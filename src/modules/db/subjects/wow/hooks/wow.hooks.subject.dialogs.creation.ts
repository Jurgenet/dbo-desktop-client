import { Dialog } from 'quasar'

import { wowClasses, WowUi } from '@/modules/db/subjects/wow'

export default function useSubjectDialogCreation ({ isCreating, subject }: { isCreating: boolean, subject: wowClasses.ISubject }) {
  return Dialog.create({
    component: WowUi.SubjectDialogCreation,
    componentProps: {
      isCreating,
      subject,
    },
    cancel: true,
    persistent: true,
  })
}
