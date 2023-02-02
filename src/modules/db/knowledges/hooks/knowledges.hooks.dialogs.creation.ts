import { Dialog } from 'quasar'

import { knowledgesClasses, KnowledgesUi } from '@/modules/db/knowledges'

export default function useKnowledgesDialogCreation ({ isCreating, knowledge }: { knowledge: knowledgesClasses.IKnowledge }) {
  return Dialog.create({
    component: KnowledgesUi.KnowledgeDialogCreation,
    componentProps: {
      isCreating,
      knowledge,
    },
    cancel: true,
    persistent: true,
  })
}
