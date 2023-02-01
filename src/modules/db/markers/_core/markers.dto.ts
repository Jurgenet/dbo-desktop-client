import { IMarkerGroups } from './markers.classes'

export interface IMarkerDto {
  _id: string
  ancestor: string
  group: IMarkerGroups,
  textColor: string
  bgColor: string
}
