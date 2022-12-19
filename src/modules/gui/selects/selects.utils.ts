import _compact from 'lodash/compact'

interface ITitled {
  title: string
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
