<template>
  <div>
    <el-row :gutter="100">
      <el-col :span="24">
        <vue-summernote ref="editer"></vue-summernote>
        <vue-summernote ref="editer1"></vue-summernote>
      </el-col>
    </el-row>
    <button @click="getVal">按钮</button>
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
        console.log(files)
        editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
      })
      editer.$on('onChange', function (contents) {
        console.log('onChange:', contents)
      })
      editer1.$on('onImageUpload', function (files) {
        console.log(files)
        editer1.run('insertImage', 'http://vuefe.cn/images/logo.png')
      })
    },
    methods: {
      getVal () {
        this.$refs.editer.run('code', 'test text')
      }
    }
  }
</script>

<style>
</style>
