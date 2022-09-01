<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
    <div v-html="html"></div>
    <button @click="aaa">提交</button>
    <div v-html="hmltData"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import axios from 'axios'

const editorConfig = { MENU_CONF: {} }
editorConfig.MENU_CONF.uploadImage = {
  // 上传图片的配置
  server: 'http://127.0.0.1:4523/m1/902939-0-default/public/upload'
}

export default Vue.extend({
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '<p>hello</p>',
      toolbarConfig: {},
      hmltData: '',
      imgUrl: null, // 储存图片的地址
      editorConfig: {
        placeholder: '请输入内容...', // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {
          // 上传图片的配置
          uploadImage: {
            //   server: 'https://api.iqtiantian.com/public/upload',
            server: 'http://1.15.171.11:3000/img/addImg',
            // 自定义插入图片
            customInsert(res, insertFn) {
              // res 即服务端的返回结果
              const { data } = res
              // const url = '//cdn.iqtiantian.com/' + data[0]
              const url = data[0]
              const alt = ''
              const href = '#'
              // if (code === 0) {
              // }
              console.log(res.data)
              // this.imgUrl = res.data

              // this.imgUrl.push()
              // 从 res 中找到 url alt href ，然后插图图片
              insertFn(url, alt, href)
            }
          }
        }
      },
      mode: 'default' // or 'simple'
    }
  },
  created() {
    this.bbb()
  },
  methods: {
    bbb() {
      axios.get('http://1.15.171.11:3000/blog/detail?id=14').then(res => {
        console.log(res)
        // this.hmltData = res.data[11].content
      })
    },
    aaa() {
      console.log(this.imgUrl)
      console.log(this.editorConfig.MENU_CONF.uploadImage)
      //  const content = this.html
      // let data = { content: this.html }
      // data = JSON.stringify(data)
      const data = {
        content: this.html
      }
      console.log(this.html)
      axios
        .post('http://1.15.171.11:3000/blog/add', data, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
            // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
          }
        })
        .then(res => {
          console.log(res)
        })
    },
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //   this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    //   window.editor = this.editor
    //   console.log(this.editor)
    // }, 1500)
    this.imgUrl = this.editorConfig
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
