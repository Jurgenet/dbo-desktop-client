import { appConsts } from '@/app'

export interface ILabel {
  label: string
}

export interface IMessage {
  text: string[]
  name?: string
  avatar?: string
  stamp?: string
  textColor?: string
  bgColor?: string
  sent?: boolean
}

export function createLabel (label: string) {
  return { label: `<strong>${label}</strong>` }
}

export function createMessage (message: IMessage) {
  return {
    name: '<i>' + appConsts.APP_NAME + '</i>',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    sent: false,
    ...message,
  }
}
