<template>
  <div class="photo">
    <Wrapper class="wrapper"></Wrapper>
    <!-- <div class="radio_broadcast">
      <i class="el-icon-message-solid"></i>
      点击图片查看大图哦！
    </div> -->
    <PhotoContent :originData="originData"></PhotoContent>
  </div>
</template>

<script>
import PhotoContent from './components/PhotoContent'
import Wrapper from './components/Wrapper'
// import axios from 'axios'
export default {
  name: 'photo',
  components: {
    PhotoContent,
    Wrapper
  },
  data() {
    return {
      originData: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      // axios.get('http://1.15.171.11:3000/img/list').then(res => {
      //   console.log(res.data)
      //   this.originData = res.data
      // })
      this.$http.get('photo/list').then(res => {
        console.log(res)
        const { data, status } = res
        if (status === 200) {
          // reverse 数组倒序
          this.originData = data.reverse()
        } else {
          this.$message.error('获取数据失败！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.photo {
  //width: 100%;
  height: 100%;
  padding: 0 15px 15px 15px;
  overflow: hidden;
  perspective: 7000px;
  .radio_broadcast {
    background-color: #0f1010;
    padding: 5px;
    border-radius: 15px;
    font-size: 20px;
    color: #37cece;
    text-align: center;
    //margin-top: -30px;
    margin-bottom: 10px;
  }
  .wrapper {
    top: -25px;
  }
}
</style>
