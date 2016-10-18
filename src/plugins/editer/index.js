var $ = require('jquery')
require('summernote')
require('summernote/dist/lang/summernote-zh-CN.min.js')
require('summernote/dist/summernote.css')

exports.install = function (Vue, options) {
  Vue.component('vue-summernote', {
    render: function (createElement) {
      return createElement('div')
    },
    mounted: function () {
      var initOptions = {
        lang: 'zh-CN'
      }
      var basicOptions = {
        placeholder: this.placeholder,
        height: this.height,
        minHeight: this.minHeight,
        maxHeight: this.maxHeight,
        focus: this.focus,
        callbacks: this.callbacks
      }
      var params = Object.assign({}, initOptions, options, basicOptions)
      $(this.$el).summernote(params)
    },
    beforeDestroy: function () {
      $(this.$el).summernote('destroy')
    },
    props: {
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      height: {
        type: Number,
        default: 500
      },
      minHeight: {
        type: Number,
        default: 200
      },
      maxHeight: {
        type: Number,
        default: 700
      },
      focus: {
        type: Boolean,
        default: true
      },
      callbacks: Object
    },
    methods: {
      /**
       * run summernote API
       * @param {String} code
       * @param {String | Number} value
       * @returns {*|jQuery}
       */
      run: function (code, value) {
        if (typeof value === undefined) {
          return $(this.$el).summernote(code)
        } else {
          return $(this.$el).summernote(code, value)
        }
      }
    }
  })
}
