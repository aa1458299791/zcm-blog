<template>
  <div class="photo">
    这是photo页面
    <PhotoContent :originData="originData"></PhotoContent>
  </div>
</template>

<script>
import PhotoContent from './components/PhotoContent'
// import axios from 'axios'
export default {
  name: 'photo',
  components: {
    PhotoContent
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
          this.originData = data
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
  // width: 100%;
  padding: 15px;
}
</style>
