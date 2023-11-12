/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = [...arr];
  if (param == 'asc') {
    newArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) == 0 ? (a.localeCompare(b) * -1) : a.localeCompare(b));
  } else if (param == 'desc') {
    newArr.sort((a, b) => a.localeCompare(b)).reverse();
  }

  return newArr;
}
