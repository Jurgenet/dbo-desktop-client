import _compact from 'lodash/compact'

interface ITitled {
  title: string
}

interface IIdentity {
  _id: string
}

// TODO: compact methods

export function getOptionById <T extends IIdentity> (optionList: T[], _id: string): T | undefined {
  return optionList.filter((i: T) => i._id === _id)[0]
}

export function getOptionsByIds <T extends IIdentity> (optionList: T[], ids: string[] | string): T[] {
  const options: Array<T | undefined> = []

  if (typeof ids === 'string') {
    const option = getOptionById(optionList, ids)

    options.push(option)
  } else {
    ids.forEach((title: string) => {
      const option = getOptionById(optionList, title)

      if (option) {
        options.push(option)
      }
    })
  }

  return _compact(options)
}

export function optionsToIds <T extends IIdentity> (optionList: T[]): string[] {
  return optionList.map((option) => option._id)
}

function getOptionByTitle <T extends ITitled> (optionList: T[], title: string): T | undefined {
  return optionList.filter((i: T) => i.title === title)[0]
}

export function getOptionsByTitles <T extends ITitled> (optionList: T[], titles: string[] | string): T[] {
  const options: Array<T | undefined> = []

  if (typeof titles === 'string') {
    const option = getOptionByTitle(optionList, titles)

    options.push(option)
  } else {
    titles.forEach((title: string) => {
      const option = getOptionByTitle(optionList, title)

      if (option) {
        options.push(option)
      }
    })
  }

  return _compact(options)
}

export function optionsToTitles <T extends ITitled> (optionList: T[]): string[] {
  return optionList.map((option) => option.title)
}
