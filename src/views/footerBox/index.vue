<template>
  <div class="footer_box">
    <div class="ceshi">
      <el-row>
        <el-col :xs="2" :sm="2" :md="6" :lg="6" :xl="6">&nbsp;</el-col>
        <!-- 博主信息 -->
        <el-col :xs="10" :sm="10" :md="6" :lg="6" :xl="6">
          <h4>博主信息</h4>
          <!-- 姓名 -->
          <div>姓名：张城铭</div>
          <!-- 邮箱 -->
          <div>邮箱：1458299791@qq.com</div>
        </el-col>
        <!-- 项目架构 -->
        <el-col :xs="10" :sm="10" :md="6" :lg="6" :xl="6">
          <h4>项目架构</h4>
          <!-- 前端框架 -->
          <div>前端框架：vue2+JavaScript+Element-ui</div>
          <div>前端布局：响应式布局+弹性布局</div>
          <div>后端框架：nest.js+TypeScript</div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="6" :lg="6" :xl="6">&nbsp;</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBox'
}
</script>

<style lang="scss" scoped>
.footer_box {
  // height: 200px;
  margin-top: 50px;
  padding: 30px 0;
  background-color: #333333;
  .ceshi {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
