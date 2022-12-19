import { ref, Ref, computed } from 'vue'

import { appConsts } from '@/app'

import { loggerDto } from '@/modules/core/logger'

interface IParams {
  moduleName?: string
}

export default function useLoggerStore ({ moduleName }: IParams = {}) {
  const messages: Ref<loggerDto.IMessage[]> = ref([])

  function sendLabel (label: string) {
    messages.value.push(loggerDto.createLabel(label))
  }

  function sendMessage (message: loggerDto.IMessage) {
    messages.value.push(loggerDto.createMessage(message))
  }

  function sendText (str: string) {
    messages.value.push(loggerDto.createMessage({
      text: [str],
      bgColor: 'grey-4',
    }))
  }

  function sendNotice (strOrArray: string | string[], sender: string | undefined) {
    messages.value.push(loggerDto.createMessage({
      name: sender ?? moduleName ?? appConsts.APP_NAME,
      text: _normalizeText(strOrArray),
      textColor: 'white',
      bgColor: 'primary',
    }))
  }

  function sendWarning (strOrArray: string | string[]) {
    messages.value.push(loggerDto.createMessage({
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      text: _normalizeText(strOrArray),
      bgColor: 'amber-8',
    }))
  }

  function sendError (strOrArray: string | string[]) {
    messages.value.push(loggerDto.createMessage({
      avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
      text: _normalizeText(strOrArray),
      textColor: 'white',
      bgColor: 'red-8',
    }))
  }

  function sendResponse (strOrArray: string | string[], sender: string | undefined) {
    messages.value.push(loggerDto.createMessage({
      name: sender ?? moduleName ?? 'adam',
      avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
      text: _normalizeText(strOrArray),
      sent: true,
    }))
  }

  function sendSpam (strOrArray: string | string[]) {
    messages.value.push(loggerDto.createMessage({
      avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
      text: _normalizeText(strOrArray),
    }))
  }

  return {
    messages,
    messagesCount: computed(() => messages.value.length),
    sendLabel,
    sendMessage,
    sendText,
    sendNotice,
    sendWarning,
    sendError,
    sendResponse,
    sendSpam,
  }
}

function _normalizeText (strOrArray: string | string[]) {
  return typeof strOrArray === 'string' ? [strOrArray] : strOrArray
}
