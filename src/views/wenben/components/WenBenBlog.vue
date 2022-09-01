<template>
  <div>
    <!-- 上传图片 -->
    <el-upload
      class="upload-demo"
      action="http://1.15.171.11:3000/img/addSrc"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :before-upload="handleUpload"
      :file-list="fileList"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <!-- 文章标题跟内容 -->
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入标题内容"
      v-model="textarea"
    ></el-input>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入文章内容"
      v-model="article"
    ></el-input>
    <!-- 富文本编辑器 -->
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
      <!-- <div v-html="html"></div> -->
      <button class="submitButton" @click="submitArticle">提交</button>
      <!-- <div v-html="hmltData"></div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// import axios from 'axios'

const editorConfig = { MENU_CONF: {} }
editorConfig.MENU_CONF.uploadImage = {
  // 上传图片的配置
  server: 'http://127.0.0.1:4523/m1/902939-0-default/public/upload'
}

export default Vue.extend({
  components: { Editor, Toolbar },
  props: {
    postLink: {
      type: String
    }
  },
  data() {
    return {
      requestData: {
        id: null
      },
      fileList: [], // 上传图片的信息
      article: '', // 文章内容
      textarea: '', // 标题文本
      editor: null,
      html: '开始编写文章内容吧......',
      toolbarConfig: {},
      hmltData: '',
      // id: null, // 文章id
      imgUrlList: [], // 储存图片的地址
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
  created() {},
  methods: {
    // 上传之前的回调
    handleUpload(file) {
      // console.log(file)
    },
    //  上传成功时的回调
    handleSuccess(response, file, fileList) {
      //  console.log(response.imgUrl, file, fileList)
      const { imgUrl } = response
      // console.log(imgUrl, id)
      const imgSrc = 'http://1.15.171.11:3000/' + imgUrl

      this.imgUrlList.push(imgSrc)

      // this.id = id
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview(file) {
      //  console.log(file)
    },
    // 提交信息
    submitArticle() {
      //  console.log(this.fileList)
      console.log(this.textarea, this.article)
      //  const content = this.html
      // let data = { content: this.html }
      // data = JSON.stringify(data)
      const imgSrc = this.imgUrlList.toString()
      const data = {
        content: this.html,
        imgSrc,
        title: this.textarea,
        text: this.article
      }
      // console.log(this.html)
      //  this.$http.post(`${this.postLink}blog/add`
      this.$http
        .post(`${this.postLink}`, data, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
            // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
          }
        })
        .then(res => {
          console.log(res)
          const { status } = res
          if (status === 201) {
            this.$message.success('提交成功')
            this.html = ''
            this.textarea = ''
            this.article = ''
            this.imgUrlList = []
          } else {
            this.$message.error('提交失败')
          }
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
<style lang="scss" scoped>
.submitButton {
  margin-bottom: 50px;
}
</style>
