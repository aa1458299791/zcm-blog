<template>
  <div class="blog_details">
    <el-row>
      <el-col :xs="1" :sm="2" :md="4" :lg="4" :xl="4">
        &nbsp;功能尚在开发中...
      </el-col>
      <el-col :xs="22" :sm="20" :md="16" :lg="16" :xl="16">
        <Article :articleData="articleData"></Article>
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
      articleData: {} // 文章内容
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // 获取文章内容
    initData() {
      this.$http
        .get(`${this.$route.query.link}?id=` + this.$route.query.id)
        .then(res => {
          console.log(res)
          const { data, status } = res
          if (status === 200) {
            this.articleData = data
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
