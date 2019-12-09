// 全局过滤器，定义过滤函数
const vfilter = {
  phoneFliter: function (val) {
    val = String(val)
    return val.replace(val.substr(3, 4), "****")
  }
}
export default vfilter
