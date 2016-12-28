#
Vue summernote plugin

> 一个Vue集成[summernote](http://summernote.org/)富文本插件

![](https://img.shields.io/npm/dm/vue-summernote.svg)
![](https://img.shields.io/npm/v/vue-summernote.svg)

## Requirements

* jQuery
* BootStrap
* summernote

## Installation

```bash
npm i vue-summernote -S
```

## Usage

使用须知：

**插件目前仅支持vue2.0以上版本**

### Install plugin

编辑`main.js`

```javascript
import VueSummernote from 'vue-summernote'

// 载入bootstrap.js
require('bootstrap')

// 载入bootstrap以及summernote的样式
// 这里需要你的脚手架工具具有加载css的能力
require('bootstrap/dist/css/bootstrap.min.css')
require('summernote/dist/summernote.css')

// 这里设置summernote的初始化选项
// 可参考 http://summernote.org/deep-dive/#initialization-options
Vue.use(VueSummernote, {
  dialogsFade: true
})
```

编辑`webpack.base.conf.js`

**因为summernote依赖于BootStrap，而Bootstrap严重依赖jQuery，这里需要配置jQuery为全局使用，不然会报错，找不到jQuery**

```javascript
var webpack = require('webpack')
var jquery = require('jquery')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}
```

### Examples

```vue
<template>
<div>
  <el-row :gutter="100">
    <vue-summernote ref="editer"></vue-summernote>
    <vue-summernote ref="editer1"></vue-summernote>
  </el-row>
  <button @click="setVal">初始化</button>
  <button @click="getVal">获取</button>
</div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    const self = this
    const editer = self.$refs.editer
    const editer1 = self.$refs.editer1
    editer.$on('onImageUpload', function (files) {
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
      editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
    })
    editer.$on('onChange', function (contents) {
      // 当富文本框内容发生变化时做什么事
      console.log('onChange:', contents)
    })
    editer1.$on('onImageUpload', function (files) {
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
      editer1.run('insertImage', 'http://vuefe.cn/images/logo.png')
    })
  },
  methods: {
    setVal () {
      // 设置初始值
      this.$refs.editer.run('code', '这里是富文本的初始值')
    },
    getVal () {
      // 获取初始值
      this.$refs.editer.run('code')
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| placeholder | 占位符 | String | '请输入内容' |
| height | 富文本编辑器高度 | Number | 500 |
| minHeight | 富文本编辑器最小高度 | Number | 200 |
| maxHeight | 富文本编辑器最大高度 | Number | 700 |
| focus | 富文本编辑器焦点 | Boolean | true |

### Events

| 事件 | 参数 |
| :---: | :---: |
| onInit | 无 |
| onEnter | 无 |
| onFocus | 无 |
| onBlur | 无 |
| onKeyup | event |
| onKeydown | event |
| onPaste | event |
| onImageUpload | files |
| onChange | contents |

### Mothods

#### run\(code, value\)

参数说明：

| 参数 | 说明 | 类型 | 必需 |
| :---: | :---: | :---: | :---: |
| code | 对应[summernote API](http://summernote.org/deep-dive/#basic-api)的code | String | 是 |
| value | 传递的值 | String/Number | 否 |

## License

[MIT](http://opensource.org/licenses/MIT)
