export function conLog (message: string) {
  console.log(`%c ${message}`, 'background: #222; color: #bada55')
}

export function delay (delay = 1500) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      conLog(`delay stopped aster ${delay} msc`)
      resolve()
    }, delay)
  })
}
