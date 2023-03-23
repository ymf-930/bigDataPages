/**
 * vue 实例mixin ，抽象公共属性、方法 法人名称原url searching/company_search_page.html
 */
var mixin = {
  el: '#app',
  data: function () {
    return {
    }
  },
  created: function () {
    this._init()
  },
  methods: {
    /**
     * 初始化方法获取token，初始化axios实例
     * @private 默认初始化，外部不用调用
     */
    _init: function () {
      this.axios_instance = axios.create({
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      this.axios_instance.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        // 对响应错误做点什么
        if (error.response) {
          // 响应时触发错误
          if (error.response.status >= 500) { // 如果是服务器端错误则跳转至服务错误页面
            // location.href = CTX_ROOT + '500.jspx'
          }
          if (error.response.status === 403) {
            // location.href = CTX_ROOT + '403.jspx'
          }
          if (error.response.status === 401) {
            // location.href = CTX_ROOT + '401.jspx'
          }
        } else {
          console.log('Error', error.message)
        }
        return Promise.reject(error)
      })
    },
    /**
     * 获取meta标签值的content
     * @param str 标签名称
     * @returns meta的值
     * @private
     */
    _getMeta: function (str) {
      var meta = document.getElementsByName(str)
      if (meta.length > 0) {
        return meta[0].content
      }
      return null
    },
    /**
     * 封装请求头部
     * @param isNormal 普通post请求
     * @returns {{'Content-Type': string}|{'Content-Type': string}}
     * @private
     */
    _requestHeaderByType: function (isNormal) {
      var headers
      if (isNormal) {
        headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
      } else {
        headers = { 'Content-Type': 'multipart/form-data' }
      }
      var csrfHeader = this._getMeta('_csrf_header')
      var csrfToken = this._getMeta('_csrf')
      if (csrfHeader && csrfToken) {
        headers[csrfHeader] = csrfToken
      }
      return headers
    },
    /**
     * 根据key获取url的参数值
     * @param name 参数名称
     */
    getQueryString: function (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return decodeURIComponent(r[2])
      }
      return null
    },
    /**
     * 封装get请求
     */
    getRequest: function (url, data) {
      return this.axios_instance.get(url, data)
    },
    /**
     * 封装post请求，携带token验证
     * @param url   请求地址
     * @param data  参数对象
     * @returns {promise}
     */
    postRequest: function (url, data) {
      var headers = this._requestHeaderByType(true)
      return this.axios_instance.post(url, data, {
        transformRequest: [function (data) {
          var ret = ''
          for (var it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          ret = ret.substring(0, ret.length - 1)
          return ret
        }],
        headers: headers
      })
    },
    /**
     * formData格式post请求
     * @param url 请求路径
     * @param formData formData格式类型的参数
     * let formData = new FormData()
     * formData.append('tempName', temp.tempName)
     * formData.append('tempFile', temp.fileList[0].raw)
     * @returns {promise}
     */
    postRequestFormData: function (url, formData) {
      var headers = this._requestHeaderByType(false)
      return this.axios_instance.post(url, formData, { headers: headers })
    },
    // 查询事件
    handleSearch: function (val) {
      this.$log.primary(val)
    },
    // 注册事件
    handleRegister: function () {
      this.$open('register.html')
    },
    // 发布需求事件
    handlePublish: function () {
      this.$log.info('发布需求')
    }
  }
}
