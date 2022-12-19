/*
** @see https://quasar.dev/quasar-plugins/notify#Introduction
*/

import { Notify, QNotifyCreateOptions } from 'quasar'

export function showNotify (message: string, props = {}) {
  const params:QNotifyCreateOptions = {
    message,
    multiLine: false,
    position: 'bottom',
    ...props,
  }

  Notify.create(params)
}

export function showHint (message: string, props = {}) {
  showNotify(message, {
    icon: 'announcement',
    ...props,
  })
}

export function showInfo (message: string, props = {}) {
  showNotify(message, {
    type: 'info',
    ...props,
  })
}

export function showPositive (message: string, props = {}) {
  showNotify(message, {
    type: 'positive',
    ...props,
  })
}

export function showWarning (message: string, props = {}) {
  showNotify(message, {
    type: 'warning',
    ...props,
  })
}

export function showNegative (message: string, props = {}) {
  showNotify(message, {
    type: 'negative',
    ...props,
  })
}
