<template>
  <div class="home">
    <headBox class="head_box" @handle-select="handleSelect"></headBox>
    <div class="exhibition" v-bind:style="{ minHeight: Height + 'px' }">
      <Snowflake></Snowflake>
      <router-view></router-view>
    </div>
    <footerBox class="footer_box"></footerBox>
    <!-- <wenben></wenben> -->
  </div>
</template>

<script>
import Snowflake from '@/components/Snowflake'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headBox from './headBox'
import footerBox from './footerBox'
// import wenben from './wenben'
export default {
  name: 'HomeView',
  components: {
    headBox,
    footerBox,
    Snowflake
    // wenben

    //   // HelloWorld
  },
  data() {
    return {
      headerHeight: 337, // 头部+底部的高
      windowWidth: null, // 当前窗口的宽
      Height: null, // 内容区域的高
      activeIndex: '1',
      pageMap: {
        1: '/home',
        2: '/blog',
        3: '/work',
        4: '/life',
        5: '/photo'
      }
    }
  },
  created() {
    this.handleSelect()
    // 初始化获取一次窗口宽度
    this.getWindowWidth()
    // 动态获取窗口高度
    window.addEventListener('resize', this.getWindowWidth)
  },
  mounted() {
    this.setUpHeight()
    // console.log(this.$store.state)
    // console.log(this)
  },
  // watch: {
  //   windowWidth(val) {
  //     // const that = this
  //     console.log('实时屏幕宽度：', val, this.windowHeight)
  //   }
  // },
  methods: {
    // 设置当前窗口内容高度
    setUpHeight() {
      // console.log(this.windowWidth)
      if (this.windowWidth <= 992) {
        this.headerHeight = 393
        //  console.log(123)
      }
      // console.log(window.innerWidth)

      // console.log(this.$store.state.windowWidth)
      // this.$store.commit('MODIFY_WIDTH', window.innerWidth)
      // console.log(this.headerHeight)
      // 动态设置内容高度 让footer始终居底   header+footer的高度是
      this.Height = document.documentElement.clientHeight - this.headerHeight // 监听浏览器窗口变化
      // console.log(this.Height)
      window.onresize = () => {
        // console.log(this.headerHeight)
        //  console.log(1234567)
        this.Height = document.documentElement.clientHeight - 350
      }
    },
    // 获取当前窗口宽度
    getWindowWidth() {
      this.windowWidth = window.innerWidth
      // console.log(this.windowWidth)
      //  console.log(this.$store.state.windowWidth)
      // 调用方法，把获取到的窗口宽度定义到vuex 全局状态管理里面
      this.$store.commit('MODIFY_WIDTH', this.windowWidth)
      // console.log('当前窗口宽度vuev，获取vuex里面的数据' + this.$store.state.windowWidth)
    },
    // 路由跳转
    pathRouter(activeIndex = 1) {
      this.$router.push({
        path: this.pageMap[activeIndex]
      })
    },
    // 菜单激活回调
    handleSelect(key) {
      // console.log(key)
      this.activeIndex = key
      this.pathRouter(this.activeIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  background-color: #1d1e20;
  color: white;
  // 头部
  .head_box {
  }
  // 展示
  ::v-deep .exhibition {
    position: relative;
    overflow: hidden;
    //  height: 500px;

    // margin-top: 30px;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // border: 1px solid;
    .both_sides {
      width: 15%;
      //border: 1px solid;
    }
  }
  // 底部
  .footer_box {
    // width: 100%;
    // position: fixed;
    // bottom: 0;
    // right: 0;
  }
}
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
</style>
