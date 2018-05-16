
/**
 * 生成唯一id
 * @date 2018-05-16
 * @param null
 * */
let uid = Date.now()
export function nextUid () {
  return (uid++).toString(36)
}

/**
 * 判断对象是否为空
 * @date 2018-05-16
 * @param null
 * */
export function isEmpty (obj) {
  // null and undefined are "empty"
  if (obj === null || obj === undefined) {
    return true
  }

  if (typeof obj === 'number' && isNaN(obj)) {
    return true
  }

  if (obj.length !== undefined) {
    return obj.length === 0
  }

  if (obj instanceof Date) {
    return false
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0
  }

  return false
}