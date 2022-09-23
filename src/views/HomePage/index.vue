<template>
  <div class="home_page">
    <el-carousel
      :autoplay="false"
      :initial-index="cardIndex"
      height="1080px"
      arrow="always"
      direction="vertical"
      indicator-position="none"
      ref="carousel"
      @change="switchCard"
    >
      <el-carousel-item name="0">
        <Welcome @next="next"></Welcome>
      </el-carousel-item>
      <el-carousel-item name="1">
        <Personal
          @next="next"
          @prev="prev"
          :isShopTotle="isShopTotle"
        ></Personal>
      </el-carousel-item>
      <el-carousel-item name="2">
        <MySkills @next="next" @prev="prev"></MySkills>
      </el-carousel-item>
      <el-carousel-item name="3">
        <MyProjects @next="next" @prev="prev"></MyProjects>
      </el-carousel-item>
      <el-carousel-item name="4">
        <WorkExperience @next="next" @prev="prev"></WorkExperience>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Welcome from './page/Welcome'
import Personal from './page/Personal'
import MySkills from './page/MySkills'
import MyProjects from './page/MyProjects'
import WorkExperience from './page/WorkExperience'
export default {
  name: 'HomePage',
  components: {
    Welcome,
    Personal,
    MySkills,
    MyProjects,
    WorkExperience
  },
  data() {
    return {
      cardIndex: 0,
      isShopTotle: false
    }
  },
  methods: {
    // 切换上一张
    prev() {
      this.$refs.carousel.prev()
    },
    // 切换下一张
    next(open) {
      this.$refs.carousel.next()
      // console.log(open)
      if (open === 'open') {
        console.log(this.isShopTotle)
        this.isShopTotle = true
        console.log(this.isShopTotle)
      }
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
