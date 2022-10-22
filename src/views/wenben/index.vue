<template>
  <div class="edit_text">
    <el-page-header @back="goBack" content="发布文章"></el-page-header>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="博客文章" name="first">
        <WenBenBlog :postLink="postLink[0]"></WenBenBlog>
      </el-tab-pane>
      <el-tab-pane label="工作文章" name="second">
        <WenBenBlog :postLink="postLink[1]"></WenBenBlog>
      </el-tab-pane>
      <el-tab-pane label="生活文章" name="third">
        <WenBenBlog :postLink="postLink[2]"></WenBenBlog>
      </el-tab-pane>
      <el-tab-pane label="影集" name="fourth">
        <WenBenBlog :postLink="postLink[3]"></WenBenBlog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WenBenBlog from './components/WenBenBlog.vue'
export default {
  name: 'edit_text',
  components: {
    WenBenBlog
  },
  data() {
    return {
      activeName: 'first',
      postLink: {
        0: 'blog/add', // 添加博客数据
        1: 'work/add', // 添加工作数据
        2: 'life/add', // 添加生活数据
        3: 'photo/add' // 添加影集数据
      }
    }
  },
  methods: {
    // 返回
    goBack() {
      this.$router.back()
    },
    handleClick(tab, event) {
      console.log(tab.index, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit_text {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  //  padding: 15px;
  .el-tabs {
    ::v-deep .el-tabs__nav-scroll {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
