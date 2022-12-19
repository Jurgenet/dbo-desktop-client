import { dateTimeConsts } from '.'

const locales = dateTimeConsts.locales
const defaultLocale = locales.ru._id

export function getDayOfWeekName (dayNo: number, locale = defaultLocale) {
  const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayNamesRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  switch (locale.toLowerCase()) {
    case locales.en._id: return dayNamesEn[dayNo]
    case locales.ru._id: return dayNamesRu[dayNo]
  }
}

export function getMonthName (monthNo: number, locale = defaultLocale) {
  const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthNamesRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

  switch (locale.toLowerCase()) {
    case locales.en._id: return monthNamesEn[monthNo]
    case locales.ru._id: return monthNamesRu[monthNo]
  }
}

/**
 * Returns short date, like as '29/11/2022'
 *
 * @prop { Date }   date - date (expects `now Date()`)
 * @prop { string } separator - separator
 *
 * @returns { string }
 */
export function getShortDate (date = new Date(), separator = '/') {
  return `${date.getFullYear()}${separator}${date.getMonth() + 1}${separator}${date.getDate()}`
}
