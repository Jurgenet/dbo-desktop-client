import { copyToClipboard } from 'quasar'

import { notificationUtils } from '@/modules/core/notification'

import { clipboardConsts } from '@/modules/core/clipboard'

export async function clip (text: string) {
  await copyToClipboard(text)

  notificationUtils.showInfo(`"${text}" ${clipboardConsts.messages.copySuccessful}`)
}
