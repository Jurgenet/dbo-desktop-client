import { Dialog } from 'quasar'

import { knowledgesDto, KnowledgesUi } from '@/modules/db/knowledges'

export default function useKnowledgesDialogCreation ({ knowledge }: { knowledge: knowledgesDto.IKnowledgeDraft }) {
  return Dialog.create({
    component: KnowledgesUi.KnowledgeDialogCreation,
    componentProps: {
      knowledge,
    },
    cancel: true,
    persistent: true,
  })
}
