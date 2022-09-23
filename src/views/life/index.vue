<template>
  <div class="blog">
    <div class="exhibition">
      <div class="content_box">
        <el-row>
          <el-col :xs="1" :sm="2" :md="6" :lg="6" :xl="6">&nbsp;</el-col>
          <!-- 中间内容  el-empty空页面  -->
          <el-col
            :xs="22"
            :sm="20"
            :md="12"
            :lg="12"
            :xl="12"
            v-if="cardData.length === 0"
          >
            <el-empty :image-size="200"></el-empty>
          </el-col>
          <el-col :xs="22" :sm="20" :md="12" :lg="12" :xl="12" v-else>
            <contentBox
              v-for="item in showPage"
              :key="item.id"
              :cardData="item"
              @click.native="blogDetails(item.id)"
            ></contentBox>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="cardDataLength"
              :page-size="pageSize"
              @current-change="changePage"
              @prev-click="prevPage"
              @next-click="nextPage"
            ></el-pagination>
          </el-col>

          <el-col :xs="1" :sm="2" :md="6" :lg="6" :xl="6">&nbsp;</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import contentBox from './components/contentBox'
export default {
  name: 'Life',
  components: { contentBox },
  data() {
    return {
      cardData: [], // 初始化获取页面数据 接收后台的总数据
      cardDataLength: null, // cardData数组的长度  有多少条数据
      cur: 1, // 当前页
      totalPage: '', // 总页数
      pageSize: 5, // 每页要展示数据条数
      showPage: [] // 每页展示的数据
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // 点击页码
    changePage(index) {
      //  console.log(index)
      this.cur = index
      this.page(this.cur)
    },
    // 获取分页
    page(num) {
      // this.cur = num // 当前页
      const list = (this.cur - 1) * this.pageSize // 每去一组数据的第一个索引
      this.showPage = this.cardData.slice(list, list + this.pageSize) // 从总数据中取出每页的数据
      // console.log('获取分页')
    },

    // 上一页
    prevPage() {
      if (this.cur !== 1) {
        --this.cur
        this.page()
      }
    },

    // 下一页
    nextPage() {
      if (this.cur < this.totalPage) {
        ++this.cur
        this.page()
      }
    },
    // h获取博客页面信息
    initData() {
      this.$http.get('http://1.15.171.11:3000/life/list').then(res => {
        console.log(res)
        const { status, data } = res
        if (status === 200) {
          // const str = data[0].imgSrc.split(',')
          // data[0] = str
          // console.log(str)
          // reverse把数组顺序颠倒过来，使最新的内容在前面
          this.cardData = data.reverse()
          this.cardDataLength = data.length
          this.totalPage = this.cardDataLength / this.pageSize
          //   console.log(this.totalPage)
          // 获取分页数据
          this.page(this.cur)
          if (this.cardData.length === 0) {
            this.$message.error('暂无此类数据！')
          }
          //   console.log(this.cardData.length)

          // for (let i = 0; i < this.cardData.length; i++) {
          //   console.log(i)
          //   let str = this.cardData[i].imgSrc
          //   str = str.split(',')
          //   this.cardData[i].imgSrc = str
          // }

          //  console.log(str)
          //  this.cardData.imgSrc = this.cardData.imgSrc.split(',')
          //  console.log(this.cardData)
        } else {
          this.$message.error('获取数据失败！')
        }
      })
    },
    // 点击进入博客详情
    blogDetails(index) {
      //  console.log(index)
      this.$router.push({
        path: 'life/details',
        query: {
          id: index,
          link: 'life/detail'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
