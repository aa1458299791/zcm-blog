<template>
  <div class="skill_cred">
    <div class="upper_part">
      <!-- 图片 -->
      <div class="picture">
        <el-image :src="credData.pictureUrl"></el-image>
        <div class="picture_logo">
          <el-image
            style="width: 50px; height: 50px"
            :src="credData.picture_logo"
          ></el-image>
        </div>
      </div>
      <!-- logo -->
    </div>
    <!-- 标题 -->
    <h2 class="text_title">
      {{ credData.text_title }}
    </h2>
    <!-- 内容 -->
    <div class="text_content">{{ credData.text_content }}</div>
  </div>
</template>

<script>
export default {
  name: 'SkillCred',
  props: {
    credData: {
      type: Object
    }
  },
  data() {
    return {
      // credData: {
      //   pictureUrl: require('@/../public/imgage/c04.jpg'),
      //   picture_logo: require('@/../public/imgage/html5.png'),
      //   text_title: 'HTML5',
      //   text_content:
      //     '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
      // }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.skill_cred {
  width: 100%;
  max-height: 420px;
  border: 3px solid #9aa9b8;
  border-radius: 5px;
  // position: relative;
  overflow-y: auto;
  padding: 5px;
  // 图片
  .picture {
    width: 100%;
    position: relative;
    .el-image {
      width: 100%;
    }
  }
  // logo
  .picture_logo {
    border: 3px solid #9aa9b8;
    background-color: white;
    border-radius: 50px;
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: -35px;
    left: calc(50% - 40px);
    // margin-top: -70px;
    // left: 50px;
    // z-index: 99999999;
    // top: 25%;
    // left: 30%;
    .el-image {
      width: 100%;
      // border-radius: 80px;
    }
  }
  // 标题
  .text_title {
    margin-top: 50px;
    text-align: center;
    overflow: hidden;
    // 省略号
    text-overflow: ellipsis;
    /*弹性伸缩盒子模型显示*/
    display: -webkit-box;
    /*限制在一个块元素显示文本的行数*/
    -webkit-line-clamp: 3; /*2行*/
    /*设置或检索伸缩盒对象子元素的排列方式*/
    -webkit-box-orient: vertical;
  }
  // 内容
  .text_content {
    text-indent: 2em;
    overflow: hidden;
    // 省略号
    text-overflow: ellipsis;
    /*弹性伸缩盒子模型显示*/
    display: -webkit-box;
    /*限制在一个块元素显示文本的行数*/
    -webkit-line-clamp: 8; /*2行*/
    /*设置或检索伸缩盒对象子元素的排列方式*/
    -webkit-box-orient: vertical;
  }
}
// // 小于2000
// @media screen and (max-width: 2000px) {
//   // logo
//   .picture_logo {
//     top: 33%;
//     left: 30%;
//   }
// }
// // 小于2000
// @media screen and (max-width: 1700px) {
//   // logo
//   .picture_logo {
//     top: 38%;
//     left: 33%;
//   }
// }
// // 小于2000
// @media screen and (max-width: 1200px) {
//   // logo
//   .picture_logo {
//     top: 34%;
//     left: 33%;
//   }
// }
// // 小于2000
// @media screen and (max-width: 992px) {
//   // logo
//   .picture_logo {
//     top: 36%;
//     left: 33%;
//   }
// }
// // 小于2000
@media screen and (max-width: 768px) {
  //图片
  .picture {
    .el-image {
      width: 100%;
    }
  }
}
// // 小于2000
// @media screen and (max-width: 650px) {
//   //图片
//   .picture {
//     .el-image {
//       width: 100%;
//     }
//   }
//   // logo
//   .picture_logo {
//     // width: 200px;
//     //   background-color: yellow;
//     // width: 2100px;
//     top: 37%;
//     left: 32%;
//   }
// }

// // 小于2000
// @media screen and (min-width: 768px) {
//   // logo
//   .picture_logo {
//     top: 24%;
//     left:28%;
//   }
// }

.skill_cred:hover .picture_logo {
  border-color: #3b3d40;
}
.skill_cred:hover {
  border-color: #3b3d40;
}
</style>
