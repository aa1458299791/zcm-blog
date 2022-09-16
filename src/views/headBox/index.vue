<template>
  <div class="head_box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-row class="content" :gutter="1">
        <!-- <div > -->
        <!-- <el-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6">&nbsp;</el-col> -->
        <el-col :xs="0" :sm="2" :md="4" :lg="6" :xl="6">&nbsp;</el-col>
        <el-col :xs="5" :sm="4" :md="2" :lg="2" :xl="2">
          <el-menu-item index="1" :class="activeIndex === '1' ? 'select' : ''">
            <el-button type="primary" plain>首页</el-button>
          </el-menu-item>
        </el-col>
        <el-col :xs="5" :sm="4" :md="2" :lg="2" :xl="2">
          <el-menu-item index="2" :class="activeIndex === '2' ? 'select' : ''">
            <el-button type="primary" plain>博客</el-button>
          </el-menu-item>
        </el-col>
        <el-col :xs="5" :sm="4" :md="2" :lg="2" :xl="2">
          <el-menu-item index="3" :class="activeIndex === '3' ? 'select' : ''">
            <el-button type="primary" plain>工作</el-button>
          </el-menu-item>
        </el-col>
        <el-col :xs="5" :sm="4" :md="2" :lg="2" :xl="2">
          <el-menu-item index="4" :class="activeIndex === '4' ? 'select' : ''">
            <el-button type="primary" plain>生活</el-button>
          </el-menu-item>
        </el-col>
        <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2">
          <el-menu-item index="5" :class="activeIndex === '5' ? 'select' : ''">
            <el-button type="primary" plain>影集</el-button>
          </el-menu-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <player></player>
        </el-col>
        <!-- <el-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6">&nbsp;</el-col> -->
        <!-- </div> -->
      </el-row>
    </el-menu>
  </div>
</template>

<script>
import player from './components/player'
// import axios from 'axios'
export default {
  name: 'headBox',
  components: { player },
  data() {
    return {
      activeIndex: '1',
      isSelect: false
    }
  },
  methods: {
    // 菜单激活回调
    handleSelect(key, keyPath) {
      // console.log(key.toString())

      // const a = key.toString()
      console.log(key)
      this.$emit('handle-select', key)
      this.activeIndex = key.toString()
    }
    // async getMusic() {
    //   await axios
    //     .get('https://autumnfish.cn/song/url?id=' + '167882')
    //     .then(res => {
    //       console.log(res)
    //       const { data, code } = res.data
    //       if (code === 200) {
    //         console.log('123')
    //         this.musicData = data[0].url
    //         this.isplay = true
    //         // console.log(this.musicData + '父组件')
    //         return
    //       }
    //       console.log('请求数据失败')
    //       // this.musicData = res.data.data.url
    //     })
    //   // axios
    //   //   .get('https://autumnfish.cn/song/url?id=' + '167882')
    //   //   .then(function (res) {
    //   //     console.log(res)
    //   //     console.log(res.data.data[0].url)
    //   //     this.musicData = res.data.data[0].url
    //   //     // that.musicurl = res.data.data[0].url
    //   //     // that.isplay = true
    //   //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.head_box {
  overflow: hidden;
  color: white;
  .el-menu {
    width: 100%;
    height: 100%;
    background-color: #2e2e33;
    .el-row {
      margin: 0 auto;
    }
    .content {
      .player {
        height: 56px;
        display: flex;
        justify-content: space-evenly;
        // display: grid;
        // place-items: center;
        // line-height: 56px;
        //width: 100%;
        // height: 100%;
        // margin: auto;
      }
      .el-menu-item {
        padding: 0;
        text-align: center;
      }
      // display: flex;
      // justify-content: space-evenly;
      // align-items: center;
      .el-button {
        color: white;
        font-size: 14px;
        background: transparent;
        border: 0;
        // border: none;
        // outline: none;
        // z-index: 1;
        // border-radius: 10px;
        // /* outline: 4px solid  #fff; */
        // position: relative;
        // overflow: hidden;
      }
      .el-button:hover {
        color: blue;
        font-size: 14px;
        background: #1d1e20;
        border: none;
        outline: none;
        z-index: 1;
        border-radius: 10px;
        /* outline: 4px solid  #fff; */
        position: relative;
        overflow: hidden;
      }
      .el-button::after {
        content: '';
        position: absolute;
        background: cornflowerblue;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        left: 2px;
        top: 2px;
        border-radius: 10px;
        z-index: -1;
      }
      .el-button::before {
        content: '';
        position: absolute;
        background: white;
        width: 200%;
        height: 200%;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform-origin: 0 0;
        animation: rotate 2s infinite linear;
      }
      @keyframes rotate {
        to {
          transform: rotate(1turn);
        }
      }
    }
  }
}
// 选中样式
::v-deep .select {
  background-color: yellow;
  border-bottom: 5px solid;
}
</style>
