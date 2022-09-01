<template>
  <div class="article">
    <div v-html="articleData.content"></div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    articleData: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
.article {
  background-color: #3b3c3e;
  padding: 15px;
  border-radius: 10px;
  // 标题
  .title {
  }
  // 小图标
  .Icon {
    display: flex;
    div {
      margin: 0 5px;
    }
  }
  // 内容
  .articleContent {
    .el-image {
      // width: 100%;
      height: 200px;
    }
  }
}
</style>
