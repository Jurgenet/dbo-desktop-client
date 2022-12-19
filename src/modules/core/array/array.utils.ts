import _compact from 'lodash/compact'

/**
 * Creates an array with all falsey values removed/ (false/null/undefined/0/''/NaN)
 *
 * @prop { Array }    - array to compact
 * @returns { Array } - returns the new array of filtered values
 */
export function compact<T> (array: Array<T>) {
  const arr = [...array]

  return _compact(arr)
}
