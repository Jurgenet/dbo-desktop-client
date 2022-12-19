import { dateTimeGetters } from '.'

export function parseDate (date: Date) {
  const dayInMonth = date.getDate()
  const dayInWeek = date.getDay()
  const dayName = dateTimeGetters.getDayOfWeekName(dayInWeek)

  const monthInYear = date.getMonth() + 1
  const monthName = dateTimeGetters.getMonthName(monthInYear)

  const yearFull = date.getFullYear()

  return {
    // date
    date: {
      row: date,
    },
    day: {
      name: dayName,
      positionInMonth: dayInMonth,
      positionInWeek: dayInWeek,
      positionInMonthAsString: dayInMonth < 10 ? `0${dayInMonth}` : dayInMonth,
      positionInWeekAsString: dayInWeek < 10 ? `0${dayInWeek}` : dayInWeek,
    },
    month: {
      name: monthName,
      positionInYear: monthInYear,
      positionInYearAsString: monthInYear < 10 ? `0${monthInYear}` : monthInYear,
    },
    year: {
      full: yearFull,
    },
    // time
    localTimeString: date.toLocaleTimeString(),
  }
}
