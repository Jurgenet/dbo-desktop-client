import { Dialog } from 'quasar'

import { markersDto, MarkersUi } from '@/modules/db/markers'

export default function useKnowledgesDialogCreation ({ marker }: { marker: markersDto.IMarkerDraft }) {
  return Dialog.create({
    component: MarkersUi.MarkerDialogCreation,
    componentProps: {
      marker,
    },
    cancel: true,
    persistent: true,
  })
}
