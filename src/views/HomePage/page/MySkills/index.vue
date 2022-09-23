<template>
  <div class="my_skills">
    <!-- 顶部上一页 -->
    <div class="prev_page" @click="prev">
      <div class="Icon">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div>往上看</div>
    </div>
    <div class="text_title">
      <h1 text-data="我 的 技 能">&nbsp;</h1>
    </div>
    <!-- 走马灯 -->
    <div class="block">
      <!-- 当窗口宽度大于550 -->
      <el-carousel
        trigger="click"
        height="500px"
        arrow="always"
        indicator-position="none"
        :autoplay="false"
        v-if="windowWidth >= 550"
      >
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[0]"></SkillCred>
            </el-col>
            <el-col
              :xs="2"
              :sm="2"
              :md="2"
              :lg="2"
              :xl="2"
              class="hidden-sm-and-down"
            >
              &nbsp;
            </el-col>
            <el-col
              :xs="5"
              :sm="5"
              :md="5"
              :lg="5"
              :xl="5"
              class="hidden-sm-and-down"
            >
              <SkillCred :credData="skillsCredList[1]"></SkillCred>
            </el-col>
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[2]"></SkillCred>
            </el-col>
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[3]"></SkillCred>
            </el-col>
            <el-col
              :xs="2"
              :sm="2"
              :md="2"
              :lg="2"
              :xl="2"
              class="hidden-sm-and-down"
            >
              &nbsp;
            </el-col>
            <el-col
              :xs="5"
              :sm="5"
              :md="5"
              :lg="5"
              :xl="5"
              class="hidden-sm-and-down"
            >
              <SkillCred :credData="skillsCredList[4]"></SkillCred>
            </el-col>
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[5]"></SkillCred>
            </el-col>
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[6]"></SkillCred>
            </el-col>
            <el-col
              :xs="2"
              :sm="2"
              :md="2"
              :lg="2"
              :xl="2"
              class="hidden-sm-and-down"
            >
              &nbsp;
            </el-col>
            <el-col
              :xs="5"
              :sm="5"
              :md="5"
              :lg="5"
              :xl="5"
              class="hidden-sm-and-down"
            >
              <SkillCred :credData="skillsCredList[7]"></SkillCred>
            </el-col>
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="9" :sm="9" :md="5" :lg="5" :xl="5">
              <SkillCred :credData="skillsCredList[8]"></SkillCred>
            </el-col>
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
      <!-- 窗口宽度小于550 -->
      <el-carousel
        trigger="click"
        height="500px"
        arrow="always"
        indicator-position="none"
        :autoplay="false"
        v-if="windowWidth <= 549"
      >
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[0]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[1]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[2]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[3]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[4]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[5]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[6]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[7]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
        <!-- **** -->
        <el-carousel-item>
          <el-row :gutter="40">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
              <SkillCred :credData="skillsCredList[8]"></SkillCred>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
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
import SkillCred from '../../components/SkillCred'
export default {
  name: 'MySkills',
  components: { SkillCred },
  data() {
    return {
      windowWidth: null, // 实时获取窗口宽度
      // 卡片数据
      skillsCredList: [
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/html5.png'),
          text_title: 'HTML5',
          text_content: '对于电脑端跟移动端能做到基本适配'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/css.jpg'),
          text_title: 'CSS3',
          text_content:
            '了解并运用flex布局、float布局、栅格布局使页面在PC端或手机端展示'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/js.png'),
          text_title: 'JavaScipt',
          text_content: '对原生的写法比较陌生，一般都是在vue当中使用'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/jq.png'),
          text_title: 'jQuery',
          text_content: '有所了解，但不多'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/bootstrap.png'),
          text_title: 'Bootstrap',
          text_content: '了解栅格布局、各种组件及插件使用'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/vue.png'),
          text_title: 'Vue',
          text_content:
            '从接触项目开始，用的就是vue框架。对此比较熟悉，例如封装组件、组件之间传参接参、Vuex全局状态管理等，从而达到组件化、工程化'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/nest.jpg'),
          text_title: 'Nest.js',
          text_content: '这是一门新兴的后端语言，了解并使用一些简单的增删改查'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/Apifox1.jpg'),
          text_title: 'Apifox',
          text_content: '会用接口测试工具，写接口文档，与后端进行对接'
        },
        {
          pictureUrl: require('@/../public/imgage/c04.jpg'),
          picture_logo: require('@/../public/imgage/L-ps.png'),
          text_title: 'PhotoShop',
          text_content: '了解PS的基本使用'
        }
      ]
    }
  },
  watch: {
    '$store.state.windowWidth'() {
      // console.log(this.$store.state.windowWidth + '宽度')
      this.windowWidth = this.$store.state.windowWidth
      // console.log(this.windowWidth)
    }
  },
  created() {
    this.getWindowWidth()
  },
  methods: {
    // 获取页面宽度
    getWindowWidth() {
      this.windowWidth = this.$store.state.windowWidth
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
.my_skills {
  width: 100%;
  height: 1080px;
  color: #000;
  background-image: url(@/../public/imgage/achivements-bg.jpg);
  background-repeat: no-repeat;
  background-position-x: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // h1 {
  //   text-align: center;
  // }
  // 标题
  .text_title {
    // text-align: center;
    h1 {
      // text-align: center;
      position: relative;
      font-size: 55px;
      // font-weight: 700;
      color: #ccc;
    }
    h1::after {
      text-align: center;
      content: attr(text-data);
      position: absolute;
      white-space: nowrap;
      top: 0;
      left: 0;
      background: linear-gradient(to right, #abdcff, #545c64);
      -webkit-background-clip: text;
      color: transparent;
      animation: changeColor 12s linear infinite;
    }
    @keyframes changeColor {
      0% {
        width: 0%;
      }

      100% {
        width: 200%;
      }
    }
  }
  // 走马灯
  .block {
    background-color: aliceblue;
    .el-carousel__item {
      width: 100%;
      display: flex;
      align-items: center;
      ::v-deep .el-row {
        width: 100%;
        // margin: 0 auto;
        margin-left: -8px !important; // 提高优先级
        margin-right: -8px !important;
      }
    }
    // 卡片
    .skill_cred {
      // margin-top: 50%;
      // display: flex;
      // margin: 0 auto;
      // margin: 0 70px;
    }
  }
  // 小于2000
  // @media screen and (min-width: 500px) {
  //   // 走马灯
  //   .block {
  //     background-color: aliceblue;
  //     // 卡片
  //     .skill_cred {
  //       margin-top: 0px;
  //       // display: flex;
  //       // margin: 0 auto;
  //       // margin: 0 70px;
  //     }
  //   }
  // }
  // 小于768
  @media screen and (max-width: 768px) {
    // 走马灯
    .block {
      background-color: aliceblue;
      // 卡片
      .skill_cred {
        // margin-top: 10%;
      }
    }
    // 顶部上一页
    .prev_page {
      position: fixed; // 位置-固定
      top: 2%; // 距离底部0
      // left: 38%;
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
      // left: 38%;
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
    // 顶部上一页
    .prev_page {
      position: fixed; // 位置-固定
      top: 2%; // 距离底部0
      // left: 48%;
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
    // left: 48%;
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
