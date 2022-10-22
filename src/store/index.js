import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义要存储的数据
  state: {
    windowWidth: 0, // 获取当前窗口宽度（初始化获取一次）
    userInfo: {
      // 用户登录信息
    }
  },
  getters: {},
  // 定义修改数据的方法 调用即可修改存储数据的值
  mutations: {
    // state 自带参数 指的是外面的state ，width  第二个参数是传进来的参数
    MODIFY_WIDTH(state, width) {
      //  console.log(state, width)
      state.windowWidth = width
    },
    MODIFY_USERINFO(state, data) {
      //  console.log(state, width)
      state.userInfo = data
    }
  },
  actions: {},
  modules: {}
})
