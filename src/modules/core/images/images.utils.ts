// const imagesUrl = process.env.imagesUrl
const imagesUrl = ''

export function getDefaultImage () {
  return `${imagesUrl}no-image.png`
}

export function getImageStorageSrc (imageName: string) {
  return `${imagesUrl}${imageName}`
}
