export enum IMarkerGroups {
  NA = 'na',
  Personal = 'personal',
  Dev = 'dev',
}

export interface IMarker {
  _id: string
  title: string
  group: IMarkerGroups,
  textColor: string
  bgColor: string
}

export type IMarkerDraft = Omit<IMarker, '_id'>

export function createEmpty (): IMarkerDraft {
  return {
    title: '',
    group: IMarkerGroups.NA,
    textColor: '',
    bgColor: '',
  }
}

export function create (fields: Partial<IMarkerDraft>): IMarkerDraft {
  return {
    ...createEmpty(),
    ...fields,
  }
}
