<template>
  <div class="welcome">
    <div class="welcome_user">
      <div class="title_text">
        <h1>欢</h1>
        <h1>迎</h1>
        <h1>来</h1>
        <h1>到</h1>
        <h1>我</h1>
        <h1>的</h1>
        <h1>网</h1>
        <h1>站</h1>
      </div>
      <h3>今天也是美好的一天~</h3>
    </div>
    <FlipClock class="flip_clock"></FlipClock>
    <!-- 底部下一页 -->
    <div class="next_page" @click="next">
      <div>往下看</div>
      <div class="Icon">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
import FlipClock from '../../components/FlipClock'
export default {
  name: 'welcome',
  components: { FlipClock },
  data() {
    return {}
  },
  methods: {
    // 下一页
    next() {
      this.$emit('next', 'open')
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: 1080px;
  // background-image: url(http://www.shirleychan.cn/images/bg14.jpg);
  background-image: url(@/../public/imgage/bg14.jpg);
  background-repeat: no-repeat;
  //background-position: 45%;
  background-position-x: 45%;
  padding-top: 20%;
  // background-position-y: 100%;
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;
  // 欢迎来到我的个人网站
  .welcome_user {
    text-align: center;
    font-size: 30px;
    // 标题
    .title_text {
      h1 {
        margin: 0 3px;
        display: inline;
        //  color: #faebd7;
        animation: identifier 2s ease-in-out infinite alternate;
      }
      h1:nth-child(2) {
        // 动画何时开始
        animation-delay: 0.4s;
      }
      h1:nth-child(3) {
        animation-delay: 0.8s;
      }
      h1:nth-child(4) {
        animation-delay: 1.2s;
      }
      h1:nth-child(5) {
        animation-delay: 1.6s;
      }
      h1:nth-child(6) {
        animation-delay: 2s;
      }
      h1:nth-child(7) {
        animation-delay: 2.4s;
      }
      h1:nth-child(8) {
        animation-delay: 2.8s;
      }

      @keyframes identifier {
        to {
          color: #c2af97;
          text-shadow: 20px 0 70px #a9865c;
        }
      }
    }
  }
  // 时钟
  .flip_clock {
    // margin-top: 30%;
  }
  // 底部下一页
  //   .next_page {
  //     position: fixed; // 位置-固定
  //     bottom: 5%; // 距离底部0
  //     left: 48%;
  //     font-size: 30px;
  //     animation: myfirst 3s infinite;

  //     // 图标
  //     .Icon {
  //       text-align: center;
  //     }
  //     // .Icon:hover {
  //     //   animation: myfirst 5s alternate;
  //     // }
  //     @keyframes myfirst {
  //       50% {
  //         margin-bottom: -50px;
  //       }

  //       100% {
  //         margin-bottom: 0px;
  //       }
  //     }
  //   }
}
// 小于768
@media screen and (max-width: 768px) {
  // 底部下一页
  .next_page {
    position: fixed; // 位置-固定
    bottom: 5%; // 距离底部0
    left: calc(50% - 50px);
    font-size: 30px;
    animation: myfirst 3s infinite;

    // 图标
    .Icon {
      text-align: center;
    }
    // .Icon:hover {
    //   animation: myfirst 5s alternate;
    // }
    @keyframes myfirst {
      50% {
        margin-bottom: -50px;
      }

      100% {
        margin-bottom: 0px;
      }
    }
  }
}
// 大于768
@media screen and (min-width: 768px) {
  // 底部下一页
  .next_page {
    position: fixed; // 位置-固定
    bottom: 5%; // 距离底部0
    left: calc(50% - 50px);
    font-size: 30px;
    animation: myfirst 3s infinite;

    // 图标
    .Icon {
      text-align: center;
    }
    // .Icon:hover {
    //   animation: myfirst 5s alternate;
    // }
    @keyframes myfirst {
      50% {
        margin-bottom: -50px;
      }

      100% {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
