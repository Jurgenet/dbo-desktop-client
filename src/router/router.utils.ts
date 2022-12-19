import { appConsts } from '@/app'

import { router } from '.'

/**
 * TODO: IS-002
 */
export function goBack () {
  if (router) {
    router.go(-1)
  } else {
    console.log('History are empty')
  }
}

export function gotoRoot () {
  router.push({ path: appConsts.ROUTES.ROOT })
}

export function gotoNote (noteId: string) {
  router.push({ path: `${appConsts.ROUTES.NOTES}/${noteId}` })
}

export function gotoNotes () {
  router.push({ path: appConsts.ROUTES.NOTES })
}
