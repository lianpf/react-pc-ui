
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

/***
 * toggle class
 * @param node DOM节点
 * @param className  string or Array of string
 * @param setting true/false
 */
export function toggleClass(node, className, setting) {
  let classNames = unique( (node.getAttribute('class') || '').split(' ').filter(item => item))
  let newClassNames
  let add = typeof setting !== 'undefined' && setting
  newClassNames = add
      ? classNames.concat(className)
      : classNames.filter(item =>
          typeof className === 'string'
              ? item !== className
              : className.indexOf(item) === -1
      )

  node.setAttribute('class', unique(newClassNames).join(' '))
}

/***
 * 数组去重
 * @param array
 * @returns {any[]}
 */
export function unique(array) {
  return Array.from(new Set(array))
}

/***
 * 是否支持 flex 布局
 * @param null
 * @returns bool
 */
export function isFlexSupported() {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    const { documentElement } = window.document;
    return 'flex' in documentElement.style ||
        'webkitFlex' in documentElement.style ||
        'Flex' in documentElement.style ||
        'msFlex' in documentElement.style;
  }
  return false;
}