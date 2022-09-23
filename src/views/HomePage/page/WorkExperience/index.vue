<template>
  <div class="work_experience">
    <!-- 顶部上一页 -->
    <div class="prev_page" @click="prev">
      <div class="Icon">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div>往上看</div>
    </div>
    <div class="text_title">
      <h1 class="letter">工</h1>
      <h1 class="letter">作</h1>
      <h1 class="letter">经</h1>
      <h1 class="letter">验</h1>
    </div>
    <!-- 经验内容 -->
    <div class="experience_content">
      <el-timeline>
        <el-timeline-item timestamp="2014/07 - 2014/08" placement="top">
          <el-card>
            <h4>淘宝店铺（店铺老板）</h4>
            <p>• 主要负责店铺内的衣服上新，进货、发货、店铺客服</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/01 - 2018/06" placement="top">
          <el-card>
            <h4>广西防城港市锦悦轩主题餐厅（服务员）</h4>
            <p>• 主要负责包厢内的卫生，上菜等</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/06 - 2018/07 " placement="top">
          <el-card>
            <h4>广西防城港核电有限公司(保安)</h4>
            <p>•主要负责巡逻、安保、值班</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/07 - 2018/08" placement="top">
          <el-card>
            <h4>广西防城港市百足便利店（收银员）</h4>
            <p>•主要负责店内的收款，进货、补货</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/09 - 2020/09" placement="top">
          <el-card>
            <h4>服役于中国人民武装警察部队（战士）</h4>
            <p>
              • 曾获特战证书一次，“四有优秀士兵”（嘉奖）一次
              <br />
              • 多次参加武装巡逻，武装押运，国家安保任务，均圆满完成任务
            </p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/07 - 2021/08" placement="top">
          <el-card>
            <h4>广西防城港市社保局（项目助理）</h4>
            <p>
              • 主要负责社保卡数据后台提取、修改
              <br />
              • 利用PS对证件照进行修改
              <br />
              • 完成每日工作报告
            </p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/01 - 2022/02" placement="top">
          <el-card>
            <h4>广西防城港市防城区美团外卖（外卖骑手）</h4>
            <p>• 主要负责取餐，送餐</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/07 - 至今" placement="top">
          <el-card>
            <h4>广东省清远市天天网络科技有限公司 （web前端开发）</h4>
            <p>• 主要负责前端页面的展示</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- 底部下一页 -->
    <div class="next_page" @click="next">
      <div>到 底 了 哦~</div>
      <div class="Icon">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {}
  },
  methods: {
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
.work_experience {
  width: 100%;
  height: 1080px;
  color: #000;
  background-image: url(@/../public/imgage/achivements-bg.jpg);
  background-repeat: no-repeat;
  background-position-x: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // 时间线
  // .experience_content {
  //   width: 60%;
  //   height: 60%;
  //   margin: 0 auto;
  //   overflow: auto;
  // }
  // 小于768
  @media screen and (max-width: 768px) {
    // 时间线
    .experience_content {
      width: 70%;
      height: 60%;
      // margin: 0 auto;
      overflow: auto;
    }
  }
  // 大于768
  @media screen and (min-width: 768px) {
    // 时间线
    .experience_content {
      width: 60%;
      height: 60%;
      margin: 0 auto;
      overflow: auto;
    }
  }
  // 标题
  .text_title {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    font-size: 30px;
    .letter {
      margin: 0 3px;
      animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
      display: inline-block;
      transform: translate3d(0, 0, 0);
      // margin-top: 0.5em;
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
      //  font: normal 500 6rem 'Varela Round', sans-serif;
    }
    .letter:nth-child(1) {
      animation-delay: 0s;
    }
    .letter:nth-child(2) {
      animation-delay: 0.0333333333s;
    }
    .letter:nth-child(3) {
      animation-delay: 0.1333333333s;
    }
    .letter:nth-child(4) {
      animation-delay: 0.2333333333s;
    }
    @keyframes bounce {
      0% {
        transform: translate3d(0, 0, 0);
        text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
      }
      100% {
        transform: translate3d(0, -1em, 0);
        text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
      }
    }

    h1 {
    }
  }
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
</style>
