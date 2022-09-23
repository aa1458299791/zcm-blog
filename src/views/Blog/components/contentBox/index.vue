<template>
  <div class="content_box">
    <!-- 总览 -->
    <div class="overview">
      <!-- 图片 -->
      <div class="picture" v-if="cardData.imgSrc.length !== 0">
        <el-image
          v-for="(imgSrc, index) in strToArr(cardData.imgSrc)"
          :key="index"
          :src="imgSrc"
        ></el-image>
        <!-- </div> -->
      </div>
      <!-- 标题 -->
      <div class="title">
        <h2>{{ cardData.title }}</h2>
      </div>
      <!-- 文字 -->
      <div class="written_words">
        {{ cardData.text }}
      </div>
      <!-- 小标签 -->
      <div class="label_box">
        <!-- 生活 -->
        <div class="life"></div>
        <!-- 观看 -->
        <div class="watch"></div>
        <!-- 点赞 -->
        <div class="click_fabulous"></div>
        <!-- 时间 -->
        <div class="time">
          <i class="el-icon-time"></i>

          {{ timeFormat(cardData.update_time) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentBox',
  props: {
    cardData: {
      type: Object
    }
  },
  data() {
    return {
      img: require('@/assets/img/可达鸭.jpg')
      //   img: '@/assets/img/可达鸭.jpg'
    }
  },

  methods: {
    // 处理时间格式
    timeFormat(time) {
      // console.log(123, time)
      // slice字符串截取方法，从第几个开始，到第几个结束
      const Arr = time.slice(0, 10)
      return Arr
    },
    // 图片字符串转数组
    strToArr(str) {
      const Arr = str.split(',')
      return Arr
    }
  }
}
</script>

<style lang="scss" scoped>
.content_box {
  // width: 100%;
  // margin: 20px;
  padding: 15px;
  border-radius: 15px;
  // overflow: hidden;
  background-color: #2e2e33;
  margin-top: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  position: relative;
  transition: 0.5s top, 0.5s box-shadow;
  top: 0;
  box-shadow: #000 0px 0px;
  // 总览
  .overview {
    // margin-top: 30px;
    // 标题
    .title {
      h2 {
        /* 强制不换行 */
        white-space: nowrap;
        /* 文字用省略号代替超出的部分 */
        text-overflow: ellipsis;
        /* 匀速溢出内容，隐藏 */
        overflow: hidden;
      }
    }
    // 文字内容
    .written_words {
      // 溢出隐藏
      overflow: hidden;
      // 省略号
      text-overflow: ellipsis;
      /*弹性伸缩盒子模型显示*/
      display: -webkit-box;
      /*限制在一个块元素显示文本的行数*/
      -webkit-line-clamp: 3; /*2行*/
      /*设置或检索伸缩盒对象子元素的排列方式*/
      -webkit-box-orient: vertical;
    }
    // 图片
    .picture {
      display: flex;
      max-width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      ::v-deep .el-image {
        max-width: 200px;
        max-width: 100px;
        flex-shrink: 0; // 禁止缩小
        border-radius: 15px;
        margin: 0 5px;
        // margin-right: 10px;
        // max-height: 200px;
        // width: 500px;
        // height: 200px;
      }
    }
  }
}
.content_box:hover {
  // position: relative;
  // animation: myfirst 1s;
  top: -20px;
  box-shadow: #000 3px 3px 15px 3px;
  // background-color: yellow;
}
// @keyframes myfirst {
//   0% {
//     top: 0px;
//   }
//   100% {
//     background-color: yellow;
//     top: -20px;
//   }
//   100% {
//     background-color: yellow;
//     top: 0px;
//   }
// }
/* 整个滚动条 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  /* 关键代码 */
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #dbeffd;
  border-radius: 32px;
}
.time {
  text-align: right;
}
</style>
