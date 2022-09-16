<template>
  <div
    class="wrapper"
    ref="wrapper"
    @click="openPicture"
    @mouseenter="getInto"
    @mouseleave="remove"
  >
    <div class="min-box">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
    </div>
    <div class="max-box">
      <div class="item item1 wrapper1 wrapper_item"></div>
      <div class="item item2 wrapper2"></div>
      <div class="item item3 wrapper3"></div>
      <div class="item item4 wrapper4"></div>
      <div class="item item5 wrapper5"></div>
      <div class="item item6 wrapper6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  data() {
    return {
      clickNum: 1
    }
  },
  methods: {
    // 鼠标移出
    remove(i) {
      console.log('移出', i)
      //   this.$refs.wrapper.classList.remove('open')
      if (i.target.className === 'wrapper open') {
        this.$refs.wrapper.classList.remove('open')
      }
    },
    // 鼠标进入
    getInto() {
      console.log('进入')
      console.log(this.$refs)
      this.$refs.wrapper.classList.add('open')
    },
    // 点击展开3d相册
    openPicture(i) {
      //  console.log(i, 132)

      //  console.log(this.$refs.wrapper.classList.add('open'))
      // this.$refs.wrapper.classList.add('narrow')
      if (this.clickNum % 2 === 0) {
        // 通过res 获取到元素class标签 用add 添加
        this.$refs.wrapper.classList.add('open')
      } else {
        // 通过res 获取到元素class标签 remove 移除样式
        this.$refs.wrapper.classList.remove('open')
      }
      this.clickNum += 1
    }
  }
}
</script>

<style lang="scss" scoped>
// 媒体查询 小于768
@media screen and (max-width: 768px) {
  .wrapper {
    //   width: 100%;
    //   height: 100%;
    //   width: 500x;
    min-width: 200px;
    min-height: 200px;
    // min-width: 200px;
    // min-height: 200px;
    margin: 0px auto 0;
    position: relative;
    transform-style: preserve-3d;
    /* perspective: 2000px; */
    animation: inifinteRotate 10s infinite linear;
    //   border: 1px solid;
    //   border-radius: 15px;
  }

  .min-box,
  .max-box {
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    width: 100px;
    height: 100px;
    transition: all 2s;
  }

  .wrapper.open .max-box {
    width: 150px;
    height: 150px;
  }
  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    transition: all 2s;
    opacity: 0.7;
  }

  .item1 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119621173-20220911180149.jpg);
    background-color: blue;
    transform: translateZ(50px);
  }

  .wrapper.open .max-box .item1 {
    transform: translateZ(150px);
  }

  .item2 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119676757-20220911180116.jpg);
    /* background-color: yellow; */
    transform: rotateY(90deg) translateZ(50px);
  }

  .wrapper.open .max-box .item2 {
    transform: rotateY(90deg) translateZ(150px);
  }

  .item3 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119670549-20220911180102.jpg);
    /* background-color: brown; */
    transform: rotateY(-90deg) translateZ(50px);
  }

  .wrapper.open .max-box .item3 {
    transform: rotateY(-90deg) translateZ(150px);
  }

  .item4 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119662747-20220911180128.jpg);
    /* background-color: burlywood; */
    transform: rotateY(180deg) translateZ(50px);
  }

  .wrapper.open .max-box .item4 {
    transform: rotateY(180deg) translateZ(150px);
  }

  .item5 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119656417-20220911180122.jpg);
    /* background-color: chocolate; */
    transform: rotateX(90deg) translateZ(50px);
  }

  .wrapper.open .max-box .item5 {
    transform: rotateX(90deg) translateZ(70px);
  }

  .item6 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119631452-20220911180128.jpg);
    // background-color: cornflowerblue;
    //   transform: rotatex(-90deg) translateZ(100px);
    transform: rotatex(-90deg) translateZ(50px);
  }

  .wrapper.open .max-box .item6 {
    transform: rotateX(-90deg) translateZ(70px);
  }

  @keyframes inifinteRotate {
    0% {
      transform: rotateY(0deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }
}
// 媒体查询 大于768
@media screen and (min-width: 768px) {
  .wrapper {
    //   width: 100%;
    //   height: 100%;
    //   width: 500x;
    min-width: 400px;
    min-height: 400px;
    // min-width: 200px;
    // min-height: 200px;
    margin: 0px auto 0;
    position: relative;
    transform-style: preserve-3d;
    /* perspective: 2000px; */
    animation: inifinteRotate 10s infinite linear;
    //   border: 1px solid;
    //   border-radius: 15px;
  }

  .min-box,
  .max-box {
    position: absolute;
    top: 60%;
    left: 30%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;
    transition: all 2s;
  }

  .wrapper.open .max-box {
    width: 300px;
    height: 300px;
  }
  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    transition: all 2s;
    opacity: 0.7;
  }

  .item1 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119621173-20220911180149.jpg);
    background-color: blue;
    transform: translateZ(100px);
  }

  .wrapper.open .max-box .item1 {
    transform: translateZ(300px);
  }

  .item2 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119676757-20220911180116.jpg);
    /* background-color: yellow; */
    transform: rotateY(90deg) translateZ(100px);
  }

  .wrapper.open .max-box .item2 {
    transform: rotateY(90deg) translateZ(300px);
  }

  .item3 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119670549-20220911180102.jpg);
    /* background-color: brown; */
    transform: rotateY(-90deg) translateZ(100px);
  }

  .wrapper.open .max-box .item3 {
    transform: rotateY(-90deg) translateZ(300px);
  }

  .item4 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119662747-20220911180128.jpg);
    /* background-color: burlywood; */
    transform: rotateY(180deg) translateZ(100px);
  }

  .wrapper.open .max-box .item4 {
    transform: rotateY(180deg) translateZ(300px);
  }

  .item5 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119656417-20220911180122.jpg);
    /* background-color: chocolate; */
    transform: rotateX(90deg) translateZ(100px);
  }

  .wrapper.open .max-box .item5 {
    transform: rotateX(90deg) translateZ(140px);
  }

  .item6 {
    background-image: url(http://1.15.171.11:3000/images/yasuo_1663119631452-20220911180128.jpg);
    // background-color: cornflowerblue;
    //   transform: rotatex(-90deg) translateZ(100px);
    transform: rotatex(-90deg) translateZ(100px);
  }

  .wrapper.open .max-box .item6 {
    transform: rotateX(-90deg) translateZ(140px);
  }

  @keyframes inifinteRotate {
    0% {
      transform: rotateY(0deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }
}
// *****
// .wrapper {
//   //   width: 100%;
//   //   height: 100%;
//   //   width: 500x;
//   min-width: 200px;
//   min-height: 200px;
//   // min-width: 200px;
//   // min-height: 200px;
//   margin: 0px auto 0;
//   position: relative;
//   transform-style: preserve-3d;
//   /* perspective: 2000px; */
//   animation: inifinteRotate 10s infinite linear;
//   //   border: 1px solid;
//   //   border-radius: 15px;
// }

// .min-box,
// .max-box {
//   position: absolute;
//   top: 60%;
//   left: 40%;
//   transform: translate(-50%, -50%);
//   transform-style: preserve-3d;
//   width: 100px;
//   height: 100px;
//   transition: all 2s;
// }

// .wrapper.open .max-box {
//   width: 150px;
//   height: 150px;
// }
// .item {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 100%;
//   transition: all 2s;
//   opacity: 0.7;
// }

// .item1 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119621173-20220911180149.jpg);
//   background-color: blue;
//   transform: translateZ(50px);
// }

// .wrapper.open .max-box .item1 {
//   transform: translateZ(150px);
// }

// .item2 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119676757-20220911180116.jpg);
//   /* background-color: yellow; */
//   transform: rotateY(90deg) translateZ(50px);
// }

// .wrapper.open .max-box .item2 {
//   transform: rotateY(90deg) translateZ(150px);
// }

// .item3 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119670549-20220911180102.jpg);
//   /* background-color: brown; */
//   transform: rotateY(-90deg) translateZ(50px);
// }

// .wrapper.open .max-box .item3 {
//   transform: rotateY(-90deg) translateZ(150px);
// }

// .item4 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119662747-20220911180128.jpg);
//   /* background-color: burlywood; */
//   transform: rotateY(180deg) translateZ(50px);
// }

// .wrapper.open .max-box .item4 {
//   transform: rotateY(180deg) translateZ(150px);
// }

// .item5 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119656417-20220911180122.jpg);
//   /* background-color: chocolate; */
//   transform: rotateX(90deg) translateZ(50px);
// }

// .wrapper.open .max-box .item5 {
//   transform: rotateX(90deg) translateZ(70px);
// }

// .item6 {
//   background-image: url(http://1.15.171.11:3000/images/yasuo_1663119631452-20220911180128.jpg);
//   // background-color: cornflowerblue;
//   //   transform: rotatex(-90deg) translateZ(100px);
//   transform: rotatex(-90deg) translateZ(50px);
// }

// .wrapper.open .max-box .item6 {
//   transform: rotateX(-90deg) translateZ(70px);
// }

// @keyframes inifinteRotate {
//   0% {
//     transform: rotateY(0deg);
//   }

//   100% {
//     transform: rotateY(360deg);
//   }
// }
</style>
