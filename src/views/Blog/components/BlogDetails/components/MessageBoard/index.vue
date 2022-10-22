<template>
  <div class="message_board">
    <div
      class="message_board_box"
      v-for="item in MessageBoardList"
      :key="item.id"
    >
    <!-- 用户头像 -名字 -->
      <div class="user_information">
        <!-- 头像 -->
        <div class="head_portrait">
          <el-image :src="item.imgSrc"></el-image>
        </div>
        <!-- 名字 -->
        <div class="user_name">{{ item.title }}</div>
      </div>
      <!-- 聊天框 -->
      <div class="bubble_border_box">
        <div class="bubble-border">
          {{ item.content }}
        </div>
        <span class="time_add">
          <i class="el-icon-time"></i>
          {{ timeFormat(item.update_time) }}
        </span>
      </div>
    </div>
    <!-- 提交 -->
    <div class="submit">
      <!-- 游客信息 -->
      <div class="user_information">
        <!-- 头像 -->
        <div class="head_portrait" @click="switchAvatar">
          <el-image :src="imgSrc[photoValue]"></el-image>
        </div>
        <!-- 名字 -->
        <div class="user_name">
          <el-input placeholder="请输入内容" v-model="userName"></el-input>
        </div>
      </div>
      <!-- 文本域 -->
      <div class="text_field">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="留下你的足迹吧......(点击头像可切换)"
          v-model="textarea"
        ></el-input>
        <el-button type="primary" size="small" @click="addLeavingAmessage">
          发 表
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBoard',
  props: {
    MessageBoardList: {
      type: Array
    }
  },
  data() {
    return {
      textarea: '', //  文本域内容
      userName: '', // 游客名字
      photoValue: 1, // 头像key
      imgSrc: {
        // eslint-disable-next-line vue/no-parsing-error
        1: 'http://1.15.171.11:3000/1662973724987-20220911180102.jpg',
        2: 'http://1.15.171.11:3000/1662973727846-20220911180116.jpg',
        3: 'http://1.15.171.11:3000/1662973730855-20220911180122.jpg',
        4: 'http://1.15.171.11:3000/1662973733490-20220911180128.jpg',
        5: 'http://1.15.171.11:3000/1662973737196-20220911180136.jpg',
        6: 'http://1.15.171.11:3000/1662973740431-20220911180149.jpg'
      }
    }
  },
  created() {
    this.randomUserName()
  },
  methods: {
    // 处理时间格式
    timeFormat(time) {
      // console.log(123, time)
      // slice字符串截取方法，从第几个开始，到第几个结束
      const Arr = time.slice(0, 10)
      return Arr
    },
    // 新增留言板内容
    addLeavingAmessage() {
      this.$emit(
        'addLeavingAmessage',
        this.imgSrc[this.photoValue],
        this.userName,
        this.textarea
      )
      this.textarea = ''
    },
    // 点击换头像
    switchAvatar() {
      //  console.log(123)
      if (this.photoValue < 6) {
        // console.log(456)
        this.photoValue += 1
      } else {
        this.photoValue = 1
      }
      // console.log(this.photoValue)
    },
    // 生成随机数
    randomUserName() {
      // 生成一个5位数的随机数
      const random = Math.floor(
        (Math.random() + Math.floor(Math.random() * 9 + 1)) *
          Math.pow(10, 5 - 1)
      )
      this.userName = '游客' + random
      // console.log(random)
    }
  }
}
</script>

<style lang="scss" scoped>
.message_board {
  // 提交
  .submit {
    width: 100%;
    margin-top: 20px;
    display: flex;
    // 用户信息
    .user_information {
      width: 100px;
      margin-right: 35px;
      // 头像
      ::v-deep .head_portrait {
        // width: 60px;
        // height: 60px;
        // margin: 0 auto;
        display: flex;
        .el-image {
          width: 50px;
          height: 50px;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
      // 名字
      .user_name {
        margin-top: 5px;
        text-align: center;
        //  -webkit-line-clamp: 1;
        // display: -webkit-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        ::v-deep .el-input__inner {
          // height: 20px;
          // padding-bottom: 4px;
          // margin-bottom: 5px;
          // margin: 0;
          line-height: 30px;
          padding: 0;
          // border-radius: 50px;
        }
      }
    }
    // 文本域
    .text_field {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      ::v-deep .el-textarea__inner {
        height: 100px;
      }
      // css 特效
      .el-button {
        margin-top: 10px;
        width: 50%;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        background-color: hsl(236, 32%, 26%);
        overflow: hidden;
        transition: color 0.8s ease-in-out;
        border-radius: 15px;
      }
      .el-button::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #3cefff;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.8s ease-in-out;
      }
      .el-button:hover {
        cursor: pointer;
        color: #161616;
      }
      .el-button:hover::before {
        transform: translate3d(100%, 100%, 0) scale3d(50, 50, 50);
      }
      // ****
    }
  }

  // 留言板
  .message_board_box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    // 框
    .bubble_border_box {
      // 时间
      .time_add {
        // text-align: right;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 10px;
        color: rgb(153, 146, 146);
      }
    }
    // 用户信息
    .user_information {
      width: 100px;
      // 头像
      ::v-deep .head_portrait {
        // width: 60px;
        // height: 60px;
        // margin: 0 auto;
        display: flex;
        .el-image {
          width: 50px;
          height: 50px;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
      // 名字
      .user_name {
        margin-top: 5px;
        text-align: center;
        //  -webkit-line-clamp: 1;
        // display: -webkit-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    // 聊天框
    .bubble-border {
      // width: 300px;
      // height: 100px;
      min-width: 200px;
      min-height: 50px;
      word-break: break-all;
      text-overflow: ellipsis;
      // overflow-y: auto;
      //  overflow-x: hidden;

      text-overflow: ellipsis;
      border-radius: 10px;
      background-color: #2e2e33;
      border: 1px solid #e369a2;
      position: relative;
      margin-left: 20px;
      padding: 5px;
    }
    .bubble-border::before,
    .bubble-border::after {
      position: absolute;
      top: 20px;
      left: -20px;
      content: '';
      width: 0;
      height: 0;
      border-right: 10px solid red;
      border-bottom: 10px solid transparent;
      border-left: 10px solid transparent;
      border-top: 10px solid transparent;
    }
    .bubble-border::after {
      left: -19px;
      border-right: 10px solid #2e2e33;
    }
  }
}
</style>
