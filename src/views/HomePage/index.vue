<template>
  <div class="home_page">
    <el-carousel
      :autoplay="false"
      :initial-index="cardIndex"
      height="1080px"
      arrow="always"
      direction="vertical"
      ref="carousel"
      @change="switchCard"
    >
      <el-carousel-item name="0">
        <Welcome @next="next"></Welcome>
        <div @click="prev"><h1>上</h1></div>
        开发中
        <div @click="next"><h1>下</h1></div>
      </el-carousel-item>
      <el-carousel-item name="1">
        <div @click="prev"><h1>上</h1></div>
        开发中
        <div @click="next"><h1>下</h1></div>
      </el-carousel-item>
      <el-carousel-item name="2">
        <div @click="prev"><h1>上</h1></div>
        开发中
        <div @click="next"><h1>下</h1></div>
      </el-carousel-item>
      <el-carousel-item name="3">
        <div @click="prev"><h1>上</h1></div>
        开发中
        <div @click="next"><h1>下</h1></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Welcome from './page/Welcome'
export default {
  name: 'HomePage',
  components: {
    Welcome
  },
  data() {
    return {
      cardIndex: 0
    }
  },
  methods: {
    // 切换上一张
    prev() {
      this.$refs.carousel.prev()
    },
    // 切换下一张
    next(index) {
      this.$refs.carousel.next()
    },
    switchLower(index) {
      // this.setActiveItem(index)
      // this.next(index)
      this.$refs.carousel.setActiveItem(index)
    },

    switchCard(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page {
  width: 100%;
  height: 100%;
  margin-top: -30px;
  margin-bottom: -50px;
}
.el-carousel__item {
  //   color: #475669;
  //   font-size: 18px;
  //   opacity: 0.75;
  //   line-height: 300px;
  //   margin: 0;
  //   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  // background-color: #d3dce6;
}
</style>
