import _filter from 'lodash/filter'
import _findIndex from 'lodash/findIndex'

// List - array of pawns or other objects of some entity

/**
 * Remove item from list by values
 *
 * @prop list         { Array  } - List for filtering
 * @prop values       { Array  } - values of "property name" to removing
 * @prop propertyName { string } - name of property for filtering
 * @returns           { Array  } - returns filtered list
 */
export function remove<T> (list: Array<T>, values: string[], propertyName = '_id') {
  const _list = [...list]

  return _filter(_list, (item: T) => !values.includes(item[propertyName]))
}

/**
 * Update item in list
 *
 * @prop list         { Array  } - List for updating
 * @prop item         { Object } - entity to finding
 * @prop propertyName { string } - name of property for finding
 * @returns           { Array  } - returns updated list
 */
export function update<T> (list: Array<T>, item: T, propertyName = '_id') {
  const _list = [...list]

  const itemIndex = _findIndex(list, [propertyName, item[propertyName]])

  _list[itemIndex] = { ..._list[itemIndex], ...item }

  return _list
}
