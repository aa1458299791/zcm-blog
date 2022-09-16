<template>
  <div class="container-water-fall">
    <!-- <h1 style="position: fixed;left: 0;top: 100px;font-style: 15px;color:blue;z-index: 1000;">{{loadstatus}}</h1> -->
    <div class="btn-group">
      <!-- <button @click="loadmore">LoadMore</button>
      <button @click="switchCol(5)">5column(列)</button>
      <button @click="switchCol(8)">8column(列)</button>
      <button @click="switchCol(10)">10column(列)</button>
      <button @click="reset">reset(重置)</button> -->
      <!-- <a
        style="color: red"
        href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md"
        target="_blank"
      >
        GITHUB
      </a>
      <b style="color: blue">滚动至底部可触发loadmore</b> -->
    </div>
    <waterfall :col="col" :data="data" @loadmore="loadmore">
      <template>
        <div class="cell-item" v-for="(item, index) in data" :key="index">
          <!-- <img :src="item.imgSrc" alt="加载错误" /> -->
          <el-image :src="item.imgSrc" :preview-src-list="srcList"></el-image>
          <!-- <img src="@/assets/img/budui (10).jpg" alt=""> -->
          <div class="item-body">
            <div class="item-desc">{{ item.title }}</div>
            <!-- <div class="item-footer">
              <div
                v-if="item.avatar"
                class="avatar"
                :style="{ backgroundImage: `url(${item.avatar})` }"
              ></div>
              <div class="name">{{ item.user }}</div>
              <div class="like" :class="item.liked ? 'active' : ''">
                <i></i>
                <div class="like-total">{{ item.like }}</div>
              </div>
            </div> -->
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/
// import loading from './loading'
export default {
  props: {
    title: String,
    originData: {
      type: Array
    }
  },
  components: {
    // loading
  },
  data() {
    return {
      srcList: [], // 图片预览
      windowSize: null, // 窗口大小
      data: [],
      col: 5,
      gitHubData: {},
      aoriginData: [
        {
          img: '/img/可达鸭.c5f94934.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui1.jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui (10).jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui (10).jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui (10).jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui (10).jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        },
        {
          img: require('@/assets/img/budui (10).jpg'),
          title: '最近浴室新宠，日系神仙好物了解一下～'
        }
      ]
    }
  },
  computed: {
    itemWidth() {
      return 133 * 0.5 * (document.documentElement.clientWidth / 375)
    },
    gutterWidth() {
      return 10 * 0.5 * (document.documentElement.clientWidth / 375)
    }
  },
  watch: {
    originData() {
      console.log(1)
      this.data = this.originData
      console.log(2)
      this.picturePreview()
      console.log(3)
    }
    // windowSize() {
    //   console.log('调用', this.windowSize)
    //   this.getWindowSize()
    // }
  },
  created() {
    this.getWindowSize()
  },
  methods: {
    // 获取窗口大小  window.innerWidth
    getWindowSize() {
      this.windowSize = window.innerWidth
      if (this.windowSize < 768) {
        this.col = 2
      }
    },
    // 图片预览
    picturePreview() {
      // console.log(this.originData, 123)
      for (let i = 0; i < this.originData.length; i++) {
        console.log(this.originData[i], i)
        // const img = this.originData[i].imgSrc.slice(31, 37)
        // const img = this.originData[i].imgSrc.replace(31, 37)
        // replace  删除指定字符串
        const img = this.originData[i].imgSrc.replace('yasuo_', '')
        // console.log(img)
        this.srcList.push(img)
      }
    },
    toGitHub() {
      window.open(
        'https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md',
        '_blank'
      )
    },
    reset() {
      this.data = []
    },

    switchCol(col) {
      this.col = col
    },

    loadmore() {
      console.log(this.originData)
      this.loading = true
      this.data = this.originData
      setTimeout(() => {
        this.data = this.data.concat(this.originData, this.originData)
        this.loading = false
      }, 1000)
    }
  }
  // mounted() {
  //   console.log(this.originData)
  //   this.data = this.originData
  // }
}
</script>

<style lang="scss" scoped>
.container-water-fall {
  // padding: 0 28px;
  //width: 100vw;
  // width: 100%;
  height: 100%;
  box-sizing: border-box;
  h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  button {
    background-color: #ff0;
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    width: 100px;
    line-height: 26px;
    font-size: 13px;
    margin: 4px 0;
    margin-right: 4px;
    cursor: pointer;
    outline: none;
    &.blue-light {
      background: #27fbc2;
    }
  }
  button:hover {
    background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
  }

  ::v-deep .cell-item {
    // width: 100%;
    // margin-bottom: 18px;
    background: #ffffff;
    // color: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 12px 12px 12px 12px;
    //  overflow: hidden;
    box-sizing: border-box;
    margin: 5px;
    padding: 2px;
    .el-image {
      // border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
      border-radius: 15px;
    }
    .item-body {
      // border: 1px solid #F0F0F0;
      padding: 12px;
      .item-desc {
        font-size: 15px;
        color: #333333;
        line-height: 15px;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 22px;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 14px;
          color: #999999;
        }
        .like {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          &.active {
            i {
            }
            .like-total {
              color: #ff4479;
            }
          }
          i {
            width: 28px;
            display: block;
          }
          .like-total {
            margin-left: 10px;
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
}
.githubdata {
  float: right;
  margin-right: 90px;
  img {
    width: 14px;
    // height: 16px;
  }
}
</style>
