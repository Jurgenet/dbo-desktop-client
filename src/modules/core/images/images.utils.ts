// const IMAGES_URL = process.env.IMAGES_URL
const IMAGES_URL = ''

export function getDefaultImage () {
  return `${IMAGES_URL}no-image.png`
}

export function getImageStorageSrc (imageName: string) {
  return `${IMAGES_URL}${imageName}`
}
