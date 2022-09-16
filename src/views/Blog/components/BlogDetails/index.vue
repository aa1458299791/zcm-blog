<template>
  <div class="blog_details">
    <el-row>
      <el-col :xs="1" :sm="2" :md="4" :lg="4" :xl="4">
        &nbsp;功能尚在开发中...
      </el-col>
      <el-col :xs="22" :sm="20" :md="16" :lg="16" :xl="16">
        <Article
          :articleData="articleData"
          :MessageBoardList="MessageBoardList"
          @addLeavingAmessage="addLeavingAmessage"
        ></Article>
      </el-col>
      <el-col :xs="1" :sm="2" :md="4" :lg="4" :xl="4">
        &nbsp;功能尚在开发中...
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Article from './components/Article'
export default {
  name: 'blogDetails',
  components: {
    Article
  },
  data() {
    return {
      articleData: {}, // 文章内容
      MessageBoardList: [] // 留言板信息
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // 新增留言板信息
    addLeavingAmessage(imgSrc, userName, textarea) {
      console.log(textarea)

      if (textarea === '') {
        this.$message({
          message: '留言不可为空哦！',
          type: 'warning'
        })
        return
      } else if (userName === '小铭' || userName === '小铭同学') {
        this.$message({
          message: '换个名字留言叭！',
          type: 'warning'
        })
        return
      }

      const data = {
        imgSrc,
        title: userName,
        content: textarea,
        blogId: 'blog' + this.articleData.id
      }
      // console.log(data.blogId)
      this.$http
        .post('board/add', data, {
          header: {
            'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
            // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
          }
        })
        .then(res => {
          // console.log(res)
          const { status } = res
          if (status === 201) {
            this.$message({
              message: '发表成功',
              type: 'success'
            })
            this.getMessageBoard(this.articleData.id)
          } else {
            this.$message.error('发表失败')
          }
        })
    },
    // 获取留言板信息
    getMessageBoard(id) {
      const articleId = 'blog' + id
      // console.log(articleId)
      this.$http.get(`board/detail?blogId=${articleId}`).then(res => {
        const { data, status } = res
        if (status === 200) {
          this.MessageBoardList = data
          // console.log(this.MessageBoardList)
        }
      })
    },
    // 获取文章内容
    initData() {
      this.$http
        .get(`${this.$route.query.link}?id=` + this.$route.query.id)
        .then(res => {
          //  console.log(res)
          const { data, status } = res
          if (status === 200) {
            this.articleData = data
            this.getMessageBoard(this.articleData.id)
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog_details {
  width: 100%;
  height: 100%;
}
</style>
