<template>
  <div>
    <vue-summernote ref="editer" :callbacks="callbacks"></vue-summernote>
    <button @click="getVal">按钮</button>
  </div>
</template>

<script>
  let $editer
  export default {
    name: 'app',
    mounted () {
      $editer = this.$refs.editer
    },
    methods: {
      getVal () {
        $editer.run('code', '321937913916')
      }
    },
    data () {
      return {
        callbacks: {
          onImageUpload: function (files) {
            console.log(files)
            $editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
          }
        }
      }
    }
  }
</script>

<style>
</style>
