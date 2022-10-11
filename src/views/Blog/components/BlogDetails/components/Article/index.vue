<template>
  <div class="article">
    <div v-html="articleData.content"></div>
    <div class="split_line">
      <el-divider content-position="center">终</el-divider>
    </div>
    <div class="message_board">
      <MessageBoard
        :MessageBoardList="MessageBoardList"
        @addLeavingAmessage="addLeavingAmessage"
      ></MessageBoard>
    </div>
  </div>
</template>

<script>
import MessageBoard from '../MessageBoard'

export default {
  name: 'Article',
  components: {
    MessageBoard
  },
  props: {
    articleData: { type: Object },
    MessageBoardList: { type: Array }
  },
  methods: {
    addLeavingAmessage(imgSrc, userName, textarea) {
      // console.log(imgSrc, userName, textarea)
      this.$emit('addLeavingAmessage', imgSrc, userName, textarea)
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  background-color: #3b3c3e;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  // 分割
  .split_line {
    .el-divider {
      background-color: #e369a2;
    }
    .el-divider__text {
      border-radius: 15px;
      background-color: #918787;
      color: #fff;
    }
  }
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

::v-deep img {
  width: 100% !important;
}
</style>
