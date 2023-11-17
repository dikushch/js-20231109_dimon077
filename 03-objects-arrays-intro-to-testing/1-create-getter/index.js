/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArr = path.split('.');

  return (obj) => {
    if (Object.keys(obj).length == 0) {
      return;
    }

    let value = obj;

    for (const i of pathArr) {
      value = value[i];
      if (value === undefined) {
        return;
      }
    }

    return value;
  };
}
