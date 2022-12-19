import { date } from 'quasar'

export function timestampToDate (timeStamp: number) {
  const dateFormat = 'D MMMM h:mmA'

  return date.formatDate(timeStamp, dateFormat)
}
