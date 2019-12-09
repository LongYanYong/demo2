
const PBULICFUNC = {
  getDatetime(val) {
    if (!val) return ''
    let date = new Date(val)
    let dataVal = ''
    dataVal += date.getFullYear() + '-'
    date.getMonth() >= 9 ? dataVal += (date.getMonth() + 1) + '-' : dataVal += '0' + (date.getMonth() + 1) + '-'
    date.getDate() > 9 ? dataVal += (date.getDate()) + ' ' : dataVal += '0' + (date.getDate())
    return dataVal
  },
  getDate() {
    let date = new Date()
    let dataVal = ''
    dataVal += date.getFullYear() + '-'
    date.getMonth() >= 9 ? dataVal += (date.getMonth() + 1) + '-' : dataVal += '0' + (date.getMonth() + 1) + '-'
    date.getDate() > 9 ? dataVal += (date.getDate()) + ' ' : dataVal += '0' + (date.getDate()) + ' '
    date.getHours() > 9 ? dataVal += (date.getHours()) + ':' : dataVal += '0' + (date.getHours()) + ':'
    date.getMinutes() > 9 ? dataVal += (date.getMinutes()) + ':' : dataVal += '0' + (date.getMinutes()) + ':'
    date.getSeconds() > 9 ? dataVal += (date.getSeconds()) : dataVal += '0' + (date.getSeconds()) + ''
    return dataVal
  },
  packedArray (arr, objVal) {
    let result = []
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i][objVal]
      if (!hash[elem]) {
        result.push(arr[i])
        hash[elem] = true
      }
    }
    return result
  },
  packedArrayDelete (val, oldval) {
    for (let i = 0; i < val.length; i++) {
      for (let j = 0; j < oldval.length; j++) {
        if (oldval[j].osId === val[i].osId) {
          oldval.splice(j, 1)
          j = j - 1
        }
      }
    }
    return oldval
  },
  deleteObj (obj) {
    for (let key in obj) {
      if (key.indexOf('_') !== -1) {
        delete obj[key]
      }
    }
    return obj
  },
  cloneObj (obj) {
    var newObj = {}
    if (obj instanceof Array) {
      newObj = []
    }
    for (var key in obj) {
      var val = obj[key]
      newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val
    }
    return newObj
  },
	isBlank (str) {
  	if (str == '' || str == undefined) {
  		return true
	  } else {
  		return false
	  }
	},

  /* by yangxiong 验证规则 */

  /* 证件号码验证 */
  validateNumLet (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let numZimu = /^[0-9a-zA-Z]*$/g
    let format = numZimu.test(value)
    if (!format) {
      callback(new Error('号码只能为数字或字母'))
    } else {
      callback()
    }
  },

  /* 数字验证 */
  validateNum (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let numZimu = /^[0-9]*$/g
    let format = numZimu.test(value)
    if (!format) {
      callback(new Error('只能输入数字'))
    } else {
      callback()
    }
  },

  /* 4位数验证码验证 */
  validateSixNum (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let numZimu = /^\d{4}$/g
    let format = numZimu.test(value)
    if (!format) {
      callback(new Error('验证码应该为4位数字'))
    } else {
      callback()
    }
  },

  /* 手机号码或者电话号码验证 */
  validatephone (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let mobile = /^1[3|5|7|8]\d{9}$/
    let phone = /^0\d{2,3}-?\d{7,8}$/
    let format = mobile.test(value) || phone.test(value)
    if (!format) {
      callback(new Error('请输入正确号码'))
    } else {
      callback()
    }
  },

  /* 网址地址验证 */
  validaWww (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let mobile = /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:[\w\d]+|([^[:punct:]\s]|\/)))/
    let format = mobile.test(value)
    if (!format) {
      callback(new Error('网址输入格式不正确'))
    } else {
      callback()
    }
  },

  /* 邮箱地址输入验证 */
  validaEmails (rule, value, callback) {
  	if (value == '' || value == undefined){
		  callback()
	  }
    let email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    let format = email.test(value)
    if (!format) {
      callback(new Error('邮件输入格式不正确'))
    } else {
      callback()
    }
  },

	/* 移动内部邮箱邮箱地址输入验证 */
	validaCmccEmails (rule, value, callback) {
		if (value == '' || value == undefined){
			callback()
		}
		let email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@(chinamobile.)+[A-Za-z\d]{2,4}$/
		let format = email.test(value)
		if (!format) {
			callback(new Error('邮件输入格式不正确'))
		} else {
			callback()
		}
	},

  /* 编码输入验证 */
  validateCode (rule, value, callback) {
	  if (value == '' || value == undefined){
		  callback()
	  }
    let email = /^[A-Za-z]{1,9}-?\d{0,9}$/
    let format = email.test(value)
    if (!format) {
      callback(new Error('编码输入格式不正确'))
    } else {
      callback()
    }
  }
}

export default PBULICFUNC
