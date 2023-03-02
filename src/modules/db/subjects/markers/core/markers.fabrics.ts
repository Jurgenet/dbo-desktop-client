import { IMarker, IMarkerGroups, Marker } from './markers.classes'
import { DEFAULT_ANCESTOR } from './markers.consts'
import { IMarkerDto } from './markers.dto'

export function create (dto: Partial<IMarkerDto>): IMarker {
  return new Marker({
    _id: '',
    group: IMarkerGroups.NA,
    ancestor: DEFAULT_ANCESTOR,
    textColor: '',
    bgColor: '',
    ...dto,
  })
}

export function clone (marker: IMarker): IMarker {
  return new Marker(structuredClone(marker.dto))
}
