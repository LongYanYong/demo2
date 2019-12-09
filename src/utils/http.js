/**
 * @file 本文件为服务调用插件实现
 * @author PRD UX R&D Dept.
 * @example <caption>简单用法</caption>
 * import http from './http'
 * http.$http.get('/foo/login').then((response) => {
 *   if (response.status === 200) {
 *     console.log(`response.data=${response.data}`)
 *   }
 * })
 */

import Vue from 'vue'
import axios from 'axios'
import config from '../conf/axios.config.js'

/**
 * 深度合并多个对象，返回合并后的新对象
 * @private
 * @param  {...Object} objs 多个对象
 * @return {Object}    返回合并后的新对象，原对象内容不变
 */
function merge(...objs) {
  let result = {}

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }

  for (let obj of objs) {
    for (let key in obj) {
      assignValue(obj[key], key)
    }
  }
  return result
}

/**
 * 判断给定参数是否`null`或空对象`{}`
 * @private
 * @param  {Object}  obj 待检测对象
 * @return {Boolean}  如果参数`obj`是`null`或空对象`{}`，那么返回`true`，否则返回`false`
 */
function isOwnEmpty(obj) {
  for (let name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false // 返回false，不为空对象
    }
  }
  return true // 返回true，为空对象
}

const http = getInstances(config)

/**
 * 获得服务调用对象实例
 * @private
 * @param  {Object} conf `assets/axios.config.js`内定义的配置对象
 * @return {Object} 返回一个根据`assets/axios.config.js`配置文件生
 *                  成的服务调用对象集合
 */
function getInstances(conf) {
  let result = {}
  let domains = conf.root || null
  let commonConfig = conf.commonConfig ? conf.commonConfig : {}

  // axios.defaults = merge(axios.defaults, commonConfig)
  let opts = merge(axios.defaults, commonConfig)
  for (let ky in opts) {
    axios.defaults[ky] = opts[ky]
  }
  axios.defaults.headers['Content-Type'] = 'text/plain';
  result.$http = axios
  if (!isOwnEmpty(domains)) {
    for (let key in domains) {
      key = key.trim()
      if (key !== '' && key !== 'http') { // 忽略以"http"为属性名的节点
        let instance = axios.create(domains[key])
        let domainName = `\$${key}`
        // 为每一个实例添加上axios的静态方法
        instance.all = (promises) => {
          return axios.all(promises)
        }
        instance.spread = (cb) => {
          return axios.spread(cb)
        }
        instance.Cancel = () => {
          return axios.Cancel
        }
        instance.CancelToken = () => {
          return axios.CancelToken
        }
        instance.isCancel = () => {
          return axios.isCancel
        }
        result[domainName] = instance
      }
    }
  }
  return result
}

// 定义插件
const HttpPlugin = {
  install: (Vue) => {
    if (http === null) {
      Vue.prototype.$http = axios
    } else {
      for (let domainName in http) {
        Vue.prototype[domainName] = http[domainName]
      }
    }
  }
}

/**
 * 请求拦截器
 * @param {Object} config `axios`配置对象
 * @returns {Object|Promise} 返回配置对象本身或者返回一个Promise对象，
 *                           参见{@link https://github.com/axios/axios Axios}官网
 */
function requestInterceptor(config) {
  // 将post方法的content-type 设置为 application/x-www-form-urlencoded
  if (config.method === 'post') {
    // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    // let data = config.data
    // let param = new URLSearchParams()
    // for (let key in data) {
    //   param.append(key, data[key])
    // }
    // config.data = param
	  let data = config.data
	  for (let key in data) {
	  	if (data[key] == null)
	  		data[key] = ''
	  }
  }
	return merge(config)
}

/**
 * 请求错误处理
 * @param error
 * @returns {Promise} 返回一个Promise对象
 */
function requestError(error) {
  return Promise.reject(error)
}

/**
 * 响应拦截器
 * @param {Object} response `Axios`响应对象
 * @returns {Object|Promise} 返回`Axios`响应对象或Promise对象
 */
function responseInterceptor(response) {
  response = checkStatus(response)
  response = checkCode(response)
  return response
}

const checkStatus = (response) => {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

const checkCode = (response) => {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (response.status === -404) {
    showError(response.msg)
  }
  if (response.data.resultCode) { // 业务接口错误
    if (response.data.resultCode !== '000000') { // 接口错误
      showError(response.data.resultMessage)
      return
    }
  }
	if (response.data.systemException) { // 业务接口异常
		if (response.data.systemException.stackTrace) {
			showError(null) // 不show 异常信息（显示接口调用错误），java 异常信息太多
      return
		}
	}
  return response
}

const showError = (errorMsg, alwaysDisplay) => {
  errorMsg = errorMsg || '服务调用出错'
  if (alwaysDisplay === true) {
  } else {
  }
}

function responseError(error) {
	if (error && error.response) {
		switch (error.response.status) {
			case 403:
				break
			default:
				break
		}
	}
	return Promise.reject(error)
}

// 默认服务调用拦截器设置
http.$http.interceptors.request.use(requestInterceptor, requestError)
http.$http.interceptors.response.use(responseInterceptor, responseError)

// 注册插件
Vue.use(HttpPlugin)

export default http
