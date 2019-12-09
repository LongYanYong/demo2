/**
 * 将uri的template转换成uri
 *
 * @param      {(Function|string)}  str     URI 模版
 * @param      {<Object>}           obj     需要传入模版的参数
 * return      {<String>}           返回encode过后的URI
 */
/* eslint-disable */
export function transformTemplate2Uri (str, obj) {
  let result = ''
  let template = 'return ' + '`' + str + '`'
  let transform = new Function('data', template)
  result = transform(obj)
  return result
}
