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
      <el-row
        class="content"
        :gutter="10"
        v-if="$store.state.windowWidth > 768"
      >
        <!-- <div > -->
        <!-- <el-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6">&nbsp;</el-col> -->
        <el-col :xs="0" :sm="2" :md="4" :lg="3" :xl="3">&nbsp;</el-col>
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
        <el-col :xs="24" :sm="12" :md="3" :lg="3" :xl="3">
          <el-menu-item index="6" :class="activeIndex === '5' ? 'select' : ''">
            <UserCard></UserCard>
          </el-menu-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <player></player>
        </el-col>
        <!-- <el-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6">&nbsp;</el-col> -->
        <!-- </div> -->
      </el-row>
      <el-row class="menu_pulldown" :gutter="10" v-else>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <el-dropdown
            size="small"
            placement="bottom"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link" size="small">
              <h2>
                {{ menuName[activeIndex] }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </h2>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">
                <h3>
                  <i class="el-icon-s-home"></i>
                  首页
                </h3>
              </el-dropdown-item>
              <el-dropdown-item command="2" divided>
                <h3>
                  <i class="el-icon-s-order"></i>
                  博客
                </h3>
              </el-dropdown-item>
              <el-dropdown-item command="3" divided>
                <h3>
                  <i class="el-icon-s-order"></i>
                  工作
                </h3>
              </el-dropdown-item>
              <el-dropdown-item command="4" divided>
                <h3>
                  <i class="el-icon-s-order"></i>
                  生活
                </h3>
              </el-dropdown-item>
              <el-dropdown-item command="5" divided>
                <h3>
                  <i class="el-icon-camera-solid"></i>
                  影集
                </h3>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="grid-content bg-purple user_card">
            <UserCard></UserCard>
          </div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
import player from './components/player'
import UserCard from './components/UserCard'
// import axios from 'axios'
export default {
  name: 'headBox',
  components: { player, UserCard },
  data() {
    return {
      activeIndex: '1', // 菜单key
      isSelect: false,
      menuName: {
        1: '首页',
        2: '博客',
        3: '工作',
        4: '生活',
        5: '影集'
      } // 菜单名称
    }
  },
  methods: {
    // 下拉激活回调
    handleCommand(command) {
      // this.$message('click on item ' + command)
      console.log(this.menuName[command])
      this.$emit('handle-select', command)
      this.activeIndex = command.toString()
    },
    // 菜单激活回调
    handleSelect(key, keyPath) {
      // console.log(key.toString())

      // const a = key.toString()
      console.log(key)
      this.$emit('handle-select', key)
      this.activeIndex = key.toString()
    }
  }
}
</script>

<style lang="scss" scoped>
.head_box {
  // height: 100%;
  // overflow: hidden;
  color: white;
  .el-menu {
    // width: 100%;
    height: 100%;
    // background-color: #2e2e33;
    .el-row {
      margin: 0 auto;
    }
    // 下拉菜单
    .menu_pulldown {
      // width: 100%;
      // ::v-deep .el-dropdown-item {
      //   padding: 0 500px;
      // }

      .user_card {
        // height: 56px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .el-dropdown-link {
        color: #de95e4;
      }
    }
    .content {
      .player {
        height: 56px;
        display: flex;
        justify-content: space-evenly;
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
