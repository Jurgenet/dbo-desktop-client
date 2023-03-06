import { guidUtils } from '@/modules/core/guid'

export interface ITab {
  name: string
  label: string
  isAlert: boolean
  data: null | unknown
}

export const enum EBusType {
  TabAlertChange = 'TabAlertChange',
}

export interface TTabAlertChangeEventProps {
  tabName: string
  isAlert: boolean
}

export function create (label: string, data: unknown): ITab {
  const name = guidUtils.getUid()

  return {
    name,
    isAlert: false,
    label,
    data,
  }
}
