export function getOptionsFromList (list: string[]) {
  return list.map((value) => ({ label: value, value }))
}
