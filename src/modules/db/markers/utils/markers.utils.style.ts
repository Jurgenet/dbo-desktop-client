import { markersClasses } from '@/modules/db/markers'
import { useMarkersStore } from '@/stores/markers'

export function getInheritanceStyles (styles: markersClasses.IMarkerStyles, ancestorId: string) {
  // inheritance ancestor -> self styles
  let textColor
  let bgColor

  if (styles.textColor && styles.bgColor) {
    textColor = styles.textColor
    bgColor = styles.bgColor
  } else {
    const markersStore = useMarkersStore()
    const ancestor = markersStore.getAncestorById(ancestorId)

    textColor = ancestor.dto.textColor
    bgColor = ancestor.dto.bgColor
  }

  return { textColor, bgColor }
}
