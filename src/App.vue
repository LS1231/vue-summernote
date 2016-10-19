<template>
  <div>
    <vue-summernote ref="editer"></vue-summernote>
    <button @click="getVal">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.$on('onImageUpload', function (files) {
        console.log(files)
        this.$refs.editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
      })
      this.$on('onChange', function (contents) {
        console.log('onChange:', contents)
      })
    },
    methods: {
      getVal () {
        this.$refs.editer.run('code', '321937913916')
      }
    }
  }
</script>

<style>
</style>
