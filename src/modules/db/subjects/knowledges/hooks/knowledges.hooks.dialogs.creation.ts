import { Dialog } from 'quasar'

import { knowledgesClasses, KnowledgesUi } from '@/modules/db/subjects/knowledges'

export default function useKnowledgesDialogCreation ({ isCreating, knowledge }: { isCreating: boolean, knowledge: knowledgesClasses.IKnowledge }) {
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
