<template>
  <div class="my_projects">
    <!-- 顶部上一页 -->
    <div class="prev_page" @click="prev">
      <div class="Icon">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div>往上看</div>
    </div>

    <div class="text_title">
      <h1 class="diyi">我 的 项 目</h1>
      <h1 class="dier">我 的 项 目</h1>
    </div>
    <!-- 图片九宫格 -->
    <div class="project_content">
      <el-row>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[0]"
          ></PictureEffect>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[1]"
          ></PictureEffect>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[2]"
          ></PictureEffect>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[3]"
          ></PictureEffect>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[4]"
          ></PictureEffect>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <PictureEffect
            class="picture_effect"
            :projectData="projectData[5]"
          ></PictureEffect>
        </el-col>
      </el-row>

      <!-- <PictureEffect :projectData="projectData[1]"></PictureEffect>
      <PictureEffect :projectData="projectData[2]"></PictureEffect>
      <PictureEffect :projectData="projectData[3]"></PictureEffect>
      <PictureEffect :projectData="projectData[4]"></PictureEffect>
      <PictureEffect :projectData="projectData[5]"></PictureEffect> -->
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
import PictureEffect from '../../components/PictureEffect'
export default {
  name: 'MyProjects',
  components: {
    PictureEffect
  },
  data() {
    return {
      projectData: [
        {
          imgUrl: require('@/../public/imgage/p01.jpg'),
          largeTotle: '个人网站',
          smallTotle: '原创',
          introduction: '这是一个用于展示我个人的网站，也是我的第一个原创项目。'
        },
        {
          imgUrl: require('@/../public/imgage/p02.jpg'),
          largeTotle: '后台管理系统',
          smallTotle: '开源',
          introduction: '这是我的毕业设计项目，是一个用vue搭建的电商后台管理项目。'
        },
        {
          imgUrl: require('@/../public/imgage/p03.jpg'),
          largeTotle: '疫情可视化',
          smallTotle: '开源',
          introduction: '这是我的毕业设计项目，是一个用JQ+ECharts库搭建的项目。'
        },
        {
          imgUrl: require('@/../public/imgage/p04.jpg'),
          largeTotle: '天天商城',
          smallTotle: '公司',
          introduction: '这是一个类似于美团外卖的项目，用vue2+vant开发的移动端项目'
        },
        {
          imgUrl: require('@/../public/imgage/p05.jpg'),
          largeTotle: '预留备用',
          smallTotle: '预留',
          introduction: '预留备用~。'
        },
        {
          imgUrl: require('@/../public/imgage/p07.jpg'),
          largeTotle: '预留备用',
          smallTotle: '预留',
          introduction: '预留备用~'
        }
      ]
    }
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
.my_projects {
  width: 100%;
  height: 1080px;
  color: #000;
  background-image: url(@/../public/imgage/achivements-bg.jpg);
  background-repeat: no-repeat;
  background-position-x: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // overflow: auto;
  // 图片九宫格
  .project_content {
    // border: 1px solid;
    width: 80%;
    height: 60%;
    margin: 0 auto;
    margin-top: 35px;
    overflow: auto;
    // flex-flow: wrap;
    .picture_effect {
      width: 100%;
      // margin: 10px;
      // height: 100%;
      ::v-deep .snip1477 {
        // margin: 10px;
        margin: 10px auto;
      }
    }
  }
  // 标题
  .text_title {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      position: absolute;
      font-size: 55px;
    }
    .diyi {
      -webkit-text-stroke: rgba(100, 113, 126, 0.7) 2px;
      color: transparent;
    }
    .dier {
      color: #545c64;
      animation: move 3s ease-in-out infinite;
    }
    @keyframes move {
      0% {
        clip-path: polygon(
          0% 62%,
          14% 55%,
          24% 51%,
          32% 51%,
          41% 56%,
          50% 59%,
          60% 59%,
          69% 55%,
          76% 49%,
          84% 48%,
          93% 50%,
          100% 54%,
          100% 100%,
          0 100%
        );
      }
      50% {
        clip-path: polygon(
          0% 62%,
          10% 62%,
          23% 68%,
          36% 68%,
          44% 64%,
          50% 59%,
          59% 54%,
          67% 55%,
          74% 59%,
          86% 62%,
          94% 61%,
          100% 54%,
          100% 100%,
          0 100%
        );
      }
      100% {
        clip-path: polygon(
          0% 62%,
          14% 55%,
          24% 51%,
          32% 51%,
          41% 56%,
          50% 59%,
          60% 59%,
          69% 55%,
          76% 49%,
          84% 48%,
          93% 50%,
          100% 54%,
          100% 100%,
          0 100%
        );
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
}
</style>
