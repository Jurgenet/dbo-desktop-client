interface IException {
  message: string
}

export function handleError (error: string | IException) {
  let message = ''

  console.error(error)

  if (typeof error === 'string') {
    message = error.toUpperCase()
  } else if (error instanceof Error) {
    message = error.message
  }

  return { message }
}
