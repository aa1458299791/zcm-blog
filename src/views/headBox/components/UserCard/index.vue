<template>
  <div class="user_card">
    <el-popover
      placement="bottom"
      width="150"
      trigger="manual"
      v-model="visible"
    >
      <!-- 用户信息 -->
      <div class="user_info">
        <div class="portrait">
          <el-image :src="userData.portrait"></el-image>
          <div class="name">{{ userData.name }}</div>
        </div>
        <div @click.stop="publishArticle"><h3>发布文章</h3></div>
        <div @click.stop="withdrawRegister"><h3>退出登录</h3></div>
      </div>
      <!-- 头像名字 -->
      <div class="portrait_name" slot="reference" @click.stop="jumpRegister">
        <el-tooltip
          class="item"
          effect="dark"
          :content="userData.tips"
          placement="bottom"
        >
          <!-- 头像 -->
          <div class="portrait">
            <el-image :src="userData.portrait"></el-image>
            <div class="name">您好，{{ userData.name }}</div>
          </div>
          <!-- 名字 -->
        </el-tooltip>
      </div>
    </el-popover>

    <!-- <PopupBox :visible="visible" :userData="userData"></PopupBox> -->
  </div>
</template>

<script>
// import PopupBox from '../PopupBox'
export default {
  name: 'UserCard',
  components: {},
  data() {
    return {
      visible: false,
      // 用户信息
      userData: {
        portrait: null,
        name: '',
        tips: ''
      }
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    this.clcikExternal()
  },
  methods: {
    // 外部点击
    clcikExternal() {
      console.log('1')
      // if (this.visible === true) {
      // 点击弹出框内容外触发
      document.addEventListener('click', e => {
        if (!this.$el.contains(e.target)) {
          if (this.visible) {
            this.visible = false // 这句话的意思是点击其他区域关闭（也可以根据自己需求写触发事件）
            console.log('关闭')
          }
        }
      })
      // }
    },
    // 退出登录
    withdrawRegister() {
      // 清除vuex
      this.$store.commit('MODIFY_USERINFO', '')
      // 清除本地缓存token
      localStorage.removeItem('token')
      this.$router.push({
        path: '/login'
      })
    },
    //  发布文章
    publishArticle() {
      console.log('发布')
      this.$router.push({
        path: '/edit'
      })
    },
    // 判断跳转登录还是显示用户信息
    jumpRegister() {
      if (!this.$store.state.userInfo.name) {
        this.$router.push({
          path: '/login'
        })
      } else {
        this.visible = true
        console.log(this.visible)
      }
    },
    // 初始化数据
    initData() {
      //   console.log(this.$store.state.userInfo.name)
      if (!this.$store.state.userInfo.name) {
        console.log(123)
        this.userData.portrait =
          'http://1.15.171.11:3000/images/yasuo_1666258156661-20220911180116.jpg'
        this.userData.name = '请登录'
        this.userData.tips = '点击登录'
      } else {
        const { portrait, name } = this.$store.state.userInfo
        this.userData.portrait = portrait
        this.userData.name = `${name}`
        this.userData.tips = '点击查看'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user_card {
  // width: 100%;
  height: 100%;
  .el-popover {
  }

  // 头像名字
  .portrait_name {
    .item {
      //   display: flex;
    }
    .portrait {
      height: 100%;
      display: flex;
      align-items: center;
      .name {
        width: 70%;

        display: -webkit-box; //使用了flex，需要加
        overflow: hidden; //超出隐藏
        word-break: break-all; //纯英文、数字、中文
        text-overflow: ellipsis; //省略号
        -webkit-box-orient: vertical; //垂直
        -webkit-line-clamp: 1; //显示一行
        white-space: pre-line; //合并空白符序列，但是保留换行符。(如果要使用这个垂直和显示几行的代码也要写)

        // display: flex;
      }
      ::v-deep .el-image__inner {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-top: 8px;
        margin-right: 5px;
      }
    }
  }
}
.user_info {
  .portrait {
    height: 100%;
    display: flex;
    align-items: center;
    .name {
      width: 70%;
      display: -webkit-box; //使用了flex，需要加
      overflow: hidden; //超出隐藏
      word-break: break-all; //纯英文、数字、中文
      text-overflow: ellipsis; //省略号
      -webkit-box-orient: vertical; //垂直
      -webkit-line-clamp: 1; //显示一行
      white-space: pre-line; //合并空白符序列，但是保留换行符。(如果要使用这个垂直和显示几行的代码也要写)

      // display: flex;
    }
    ::v-deep .el-image__inner {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      // margin-top: 8px;
      margin-right: 10px;
    }
  }
}
</style>
