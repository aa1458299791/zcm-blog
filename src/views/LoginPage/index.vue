<template>
  <div class="login_page" ref="vantaRef">
    <!-- **粒子动画** -->
    <div class="particle">
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="polygon"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      ></vue-particles>
    </div>

    <!-- *** -->
    <el-row :gutter="10">
      <el-col :xs="1" :sm="2" :md="5" :lg="7" :xl="7">
        <div class="grid-content bg-purple">&nbsp;</div>
      </el-col>
      <el-col :xs="22" :sm="20" :md="14" :lg="10" :xl="10">
        <!-- 内容 -->
        <div class="content" v-if="pageIndex === 1">
          <!-- 账号 -->
          <div class="account">
            <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-user-solid"
              v-model="account"
            ></el-input>
          </div>
          <!-- 密码 -->
          <div class="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-s-cooperation"
              show-password
              v-model="password"
            ></el-input>
          </div>
          <!-- 功能 -->
          <div class="function">
            <div class="register" @click="registerAccount">注册账号</div>
            <div class="forget" @click="forgetPassword">忘记密码</div>
          </div>
          <!-- 登录 -->
          <div class="enroll">
            <el-button type="primary" @click="userEnroll">用户登录</el-button>
          </div>
          <!-- 游客登录 -->
          <div class="enroll">
            <el-button type="info" @click="touristUserEnroll">
              游客浏览
            </el-button>
          </div>
        </div>
        <!-- 注册账号 -->
        <div class="content" v-else-if="pageIndex === 2">
          <el-page-header @back="goBack" content="注册账号"></el-page-header>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- ***** -->
            <el-form-item label="账号" prop="account" label-position="left">
              <el-input v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="邀请码" prop="invitation">
              <el-input v-model="ruleForm.invitation"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <!-- **头像*** -->
            <el-form-item label="头像">
              <el-upload
                class="avatar-uploader"
                action="http://1.15.171.11:3000/img/addSrc"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img
                  v-if="ruleForm.portrait"
                  :src="ruleForm.portrait"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <!-- 注册 -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">
                立即注册
              </el-button>
            </el-form-item>
            <!-- ***** -->
          </el-form>
        </div>
        <!-- 忘记密码 -->
        <div class="content" v-else>
          <el-page-header @back="goBack" content="忘记密码"></el-page-header>
          <el-form
            :model="ruleFormForget"
            :rules="rulesForget"
            ref="ruleFormForget"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- ***** -->
            <el-form-item label="账号" prop="account" label-position="left">
              <el-input v-model="ruleFormForget.account"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
              <el-input
                type="password"
                v-model="ruleFormForget.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="邀请码" prop="invitation">
              <el-input v-model="ruleFormForget.invitation"></el-input>
            </el-form-item>
            <!-- 修改 -->
            <el-form-item>
              <el-button
                type="primary"
                @click="submitFormForget('ruleFormForget')"
              >
                立即修改
              </el-button>
            </el-form-item>
            <!-- ***** -->
          </el-form>
        </div>
        <!-- ***** -->
      </el-col>
      <el-col :xs="1" :sm="2" :md="5" :lg="7" :xl="7">
        <div class="grid-content bg-purple">&nbsp;</div>
      </el-col>
    </el-row>
    <!-- ****** -->
  </div>
</template>

<script>
// import * as THREE from 'three'
// import BIRDS from 'vanta/src/vanta.birds'
export default {
  name: 'LoginPage',
  data() {
    return {
      account: '', // 账号
      password: '', // 密码
      pageIndex: 1, // 切换页面
      // 注册表单信息
      ruleForm: {
        account: '',
        password: '',
        name: '',
        portrait: '',
        invitation: ''
      },
      // 忘记表单信息
      ruleFormForget: {
        account: '',
        password: '',
        invitation: ''
      },
      // 表单验证
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        invitation: [
          {
            required: true,
            message: '请输入邀请码（联系管理员）',
            trigger: 'blur'
          },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ]
      },
      // 忘记表单验证
      rulesForget: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        invitation: [
          {
            required: true,
            message: '请输入邀请码（联系管理员）',
            trigger: 'blur'
          },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    // 游客登录
    touristUserEnroll() {
      this.$router.push({
        path: '/home'
      })
    },
    // 立即修改
    submitFormForget(formName) {
      console.log(this.ruleFormForget)
      // 验证表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功回调
          this.$http
            .post('user/update', this.ruleFormForget, {
              header: {
                'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
                // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
              }
            })
            .then(res => {
              console.log(res)
              const { status, msg } = res.data
              if (status === 201) {
                // 重置表单
                this.$refs[formName].resetFields()
                this.$message({
                  message: msg,
                  type: 'success'
                })
              } else {
                this.$message({
                  message: msg,
                  type: 'warning'
                })
              }
            })
        } else {
          this.$message({
            message: '请检查注册信息！',
            type: 'warning'
          })
          return false
        }
      })
    },
    // 切换回登录页
    goBack() {
      this.pageIndex = 1
    },
    // 立即注册
    submitForm(formName) {
      // 判断有无头像
      if (!this.ruleForm.portrait) {
        this.$message({
          message: '请选择头像！',
          type: 'warning'
        })
        return
      }
      // 验证表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功回调
          this.$http
            .post('user/add', this.ruleForm, {
              header: {
                'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
                // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
              }
            })
            .then(res => {
              console.log(res)
              const { status, msg } = res.data
              if (status === 201) {
                // 重置表单
                this.$refs[formName].resetFields()
                this.$message({
                  message: msg,
                  type: 'success'
                })
              } else {
                this.$message({
                  message: msg,
                  type: 'warning'
                })
              }
            })
        } else {
          this.$message({
            message: '请检查注册信息！',
            type: 'warning'
          })
          return false
        }
      })
    },
    // 上传头像成功回调
    handleAvatarSuccess(res, file) {
      console.log(res, file)
      this.ruleForm.portrait = res.data[0]
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    // beforeAvatarUpload(file) {
    //   console.log(file)
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 2

    //   // if (!isJPG) {
    //   //   this.$message.error('上传头像图片只能是 JPG 格式!')
    //   // }
    //   // if (!isLt2M) {
    //   //   this.$message.error('上传头像图片大小不能超过 2MB!')
    //   // }
    //   return isJPG && isLt2M
    // },
    // 忘记密码
    forgetPassword() {
      this.pageIndex = 3
    },
    // 注册账号
    registerAccount() {
      this.pageIndex = 2
    },
    // 用户登录
    userEnroll() {
      if (!this.account || !this.password) {
        this.$message({
          message: '请检查用户名或密码',
          type: 'warning'
        })
        return
      }
      // const data = {
      //   account: this.account,
      //   password: this.password
      // }
      this.$http
        .get(`user/login?account=${this.account}&password=${this.password}`)
        .then(res => {
          console.log(res)
          const { status, msg, list } = res.data
          if (status === 201) {
            const { token } = list
            localStorage.setItem('token', token)
            this.$store.commit('MODIFY_USERINFO', list)
            this.$message.success(msg)
            this.$router.push({
              path: '/home'
            })
          } else {
            this.$message.error(msg)
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  //   color: white;
  // overflow-y: auto;
  // padding: 0 50px;
  position: absolute;
  background-color: #343434;
  .el-row {
    top: calc(50% - 150px);
  }
  .content {
    // width: 30%;
    padding: 50px;
    margin: 0 auto;
    border-radius: 10px;
    // top: calc(50% - 100px);
    background-color: rgba(255, 255, 255, 0.4);
    // filter: blur(1px);
    backdrop-filter: blur(10px);
    position: relative;
    box-shadow: 5px 10px 10px;
    // 注册
    .el-button--primary {
      width: 100%;
    }
    // 页头
    .el-page-header {
      margin-top: -30px;
      margin-bottom: 20px;
    }
    // 表单位置
    .el-form {
      margin-left: -50px;
    }
    // 头像
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    // 登录
    .enroll {
      .el-button--info {
        width: 100%;
        margin-top: 20px;
      }
      .el-button--primary {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    // 功能
    .function {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    // 账号
    .account {
      margin-bottom: 10px;
      ::v-deep .el-input__inner {
        width: 100%;
      }
    }
    // 密码
    .password {
      margin-bottom: 20px;
      ::v-deep .el-input__inner {
        width: 100%;
      }
    }
  }
  // *****  定义动态粒子居于下层，加一个 position: absolute;，有新的盒子看设置为position:relative
  .particle {
    width: 100%;
    // height: calc(100% - 200px);
    // top: calc(100% - 200px);
    position: absolute;
  }
}
</style>
