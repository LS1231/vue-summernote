// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import Editer from './plugins/editer'

require('bootstrap')
require('element-ui/lib/theme-default/index.css')
require('bootstrap/dist/css/bootstrap.min.css')
require('summernote/dist/summernote.css')

Vue.use(Editer, {
  dialogsFade: true
})

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
