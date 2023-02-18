export function bytesToKilobytes (bytes: number, fix = 2): number {
  return Number((bytes / 1024).toFixed(fix))
}

export function bytesToMegabytes (bytes: number, fix = 2): number {
  return Number((bytesToKilobytes(bytes, 0) / 1024).toFixed(fix))
}

export function bytesToGigabytes (bytes: number, fix = 2): number {
  return Number((bytesToMegabytes(bytes, 0) / 1024).toFixed(fix))
}
