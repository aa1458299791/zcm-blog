<template>
  <div class="personal">
    <!-- 顶部上一页 -->
    <div class="prev_page" @click="prev">
      <div class="Icon">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div>往上看</div>
    </div>
    <!-- 关于我 -->
    <div class="about_i">
      <div class="title_text" ref="title_text">
        <h1>{{ testText }}</h1>
      </div>
      <!-- 头像 -->
      <div class="head_portrait">
        <el-image
          style="width: 100px; height: 100px"
          src="http://1.15.171.11:3000/1662973724987-20220911180102.jpg"
        ></el-image>
      </div>
      <!-- 自我介绍 -->
      <div class="introduce">
        大家好，我是小铭，热爱编程的小菜鸟，方向发展是前端交互、移动开发。致力成为
        <b>web前端工程师</b>
        ！
        目前从事开发和维护相关工作。您可以在这里看到关于我的一些履历和作品。网站还在持续搭建中，期待大神们的宝贵意见。
      </div>
    </div>

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
export default {
  name: 'Personal',
  props: {
    isShopTotle: {
      type: Boolean
    }
  },
  data() {
    return {
      nowIndex: 0,
      testText: '欢迎浏览'
    }
  },
  watch: {
    isShopTotle() {
      this.dynamicTitle()
    }
  },
  methods: {
    dynamicAnimation() {
      const _this = this
      const timer = setInterval(function () {
        _this.nowIndex++
        switch (_this.nowIndex) {
          case 1:
            _this.testText = '小铭的网站'
            break
          case 2:
            _this.testText = '愿您浏览愉快'
            break
          case 3:
            _this.testText = '关于我'
            break
        }
        if (_this.nowIndex > 3) {
          setTimeout(() => {
            clearInterval(timer)
          }, 2000)
        }
      }, 2000)
    },
    // 点击开始动画
    dynamicTitle() {
      setTimeout(() => {
        // console.log('定时器开始了')
        this.$refs.title_text.classList.add('open')
        this.dynamicAnimation()
      }, 2000)
      //  console.log('定时器结束了')
    },
    // 上一页
    prev() {
      this.$emit('prev')
    },
    // 下一页
    next() {
      this.$emit('next')
    }
  }
}
</script>

<style lang="scss" scoped>
.personal {
  width: 100%;
  height: 1080px;
  color: #000;

  // background-image: url(http://www.shirleychan.cn/images/bg14.jpg);
  background-image: url(@/../public/imgage/achivements-bg.jpg);
  background-repeat: no-repeat;
  background-position-x: 45%;
  // 标题
  .title_text.open {
    h1 {
      text-transform: uppercase;
      animation: letterspacing 1s 7 alternate ease-in-out;
      letter-spacing: 0.5rem;
    }
    @keyframes letterspacing {
      0% {
        letter-spacing: -72px;
        filter: blur(20px);
      }

      40% {
        filter: blur(6px);
      }

      80% {
        letter-spacing: 8px;
        filter: blur(0);
      }
    }
  }
  // 关于我
  .about_i {
    // margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 220px;
    // text-align: center;
    // 头像
    .head_portrait {
      margin: 10px 0;
      .el-image {
        border-radius: 50px;
      }
    }
  }
}
// 小于768
@media screen and (max-width: 768px) {
  // 自我介绍
  .introduce {
    width: 70%;

    text-align: left;
    text-indent: 2em;
    font-size: 20px;
  }
  // 顶部上一页
  .prev_page {
    position: fixed; // 位置-固定
    top: 2%; // 距离底部0
    left: calc(50% - 50px);
    color: #000;
    font-size: 30px;
    animation: myfirsta 3s infinite;
    text-align: center;
  }
  // 图标
  .Icon {
    text-align: center;
  }

  @keyframes myfirsta {
    50% {
      padding-top: 40px;
    }

    100% {
      padding-top: 0px;
    }
  }
  // 底部下一页
  .next_page {
    position: fixed; // 位置-固定
    bottom: 5%; // 距离底部0
    left: calc(50% - 50px);
    font-size: 30px;
    animation: myfirst 3s infinite;
    color: #000;
    // 图标
    .Icon {
      text-align: center;
    }

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
  // 自我介绍
  .introduce {
    width: 30%;
    text-align: left;
    text-indent: 2em;
    font-size: 20px;
  }
  .personal {
    // 顶部上一页
    .prev_page {
      position: fixed; // 位置-固定
      top: 2%; // 距离底部0
      left: calc(50% - 50px);
      color: #000;
      font-size: 30px;

      animation: myfirsta 3s infinite;
    }
    // 图标
    .Icon {
      text-align: center;
    }

    @keyframes myfirsta {
      50% {
        margin-top: 40px;
      }

      100% {
        margin-top: 0px;
      }
    }
  }
  // 底部下一页
  .next_page {
    position: fixed; // 位置-固定
    bottom: 5%; // 距离底部0
    left: calc(50% - 50px);
    font-size: 30px;
    animation: myfirst 3s infinite;
    color: #000;
    // 图标
    .Icon {
      text-align: center;
    }

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
