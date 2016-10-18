# Vue summernote plugin

> 一个Vue集成[summernote](http://summernote.org/)富文本插件

![](https://img.shields.io/npm/dm/vue-summernote.svg)
![](https://img.shields.io/npm/v/vue-summernote.svg)

## Requirements

+ jQuery
+ BootStrap
+ summernote


## Installation

``` bash
npm i vue-summernote -S
```

## Usage

使用须知：

**插件目前仅支持vue2.0以上版本**

### Install plugin

编辑`main.js`

``` javascript
import VueSummernote from 'vue-summernote'

require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')

Vue.use(VueSummernote)
```

编辑`webpack.base.conf.js`

**因为summernote依赖于BootStrap，而Bootstrap严重依赖jQuery，这里需要配置jQuery为全局使用，不然会报错，找不到jQuery**

``` javascript
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

```
<template>
  <div>
    <vue-summernote ref="editer" :callbacks="callbacks"></vue-summernote>
    <button @click="getVal">提交</button>
  </div>
</template>

<script>
  let $editer
  export default {
    mounted () {
      $editer = this.$refs.editer
    },
    methods: {
      getVal () {
        console.log($editer.run('code'))
      }
    },
    data () {
      return {
        callbacks: {
          onImageUpload: function (files) {
            // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
            $editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
          }
        }
      }
    }
  }
</script>
```

### Props

| 参数  | 说明  |  类型  |  默认值
| :--: | :--: | :--:  | :--:
| placeholder     |占位符|   String |    '请输入内容'
| height      |富文本编辑器高度       |   Number  |    500
| minHeight   |富文本编辑器最小高度  |  Number  |    200
| maxHeight   |富文本编辑器最大高度  |  Number  |    700
| focus   | 富文本编辑器焦点 |  Boolean  |    true
| callbacks   | 事件回调函数集合[参考summernote文档](http://summernote.org/deep-dive/#callbacks) |  Object  |    无

### Mothods

#### run(code, value)

参数说明：

| 参数  | 说明  |  类型  |  必需
| :--: | :--: | :--:  | :--:
| code     |对应[summernote API](http://summernote.org/deep-dive/#basic-api)的code|   String |    是
| value    |传递的值        |   String/Number  |    否

## License

[MIT](http://opensource.org/licenses/MIT)
