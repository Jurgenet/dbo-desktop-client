import { Dialog } from 'quasar'

import { markersClasses, MarkersUi } from '@/modules/db/subjects/markers'

export default function useMarkersDialogCreation ({ isCreating, marker }: { isCreating: string, marker: markersClasses.IMarker }) {
  return Dialog.create({
    component: MarkersUi.MarkerDialogCreation,
    componentProps: {
      isCreating,
      marker,
    },
    cancel: true,
    persistent: true,
  })
}
