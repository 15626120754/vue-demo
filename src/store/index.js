import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: [{
      name: '首页',
      path: '/'
    }], //存放tabs
    urlRoute: '/', //记录路径的改变
  },
  mutations: {
    //添加tab
    setCategoryName: (state, data) => {  
      state.options.push(data);
    },
    //url跳转
    setUrlRoute: (state, url) => {
      state.urlRoute = url;
    },
    //删除options
    deleteOptions: (state, obj) => {    
      state.options = state.options.filter(tab => tab.path !== obj)
    }
  },
  actions: {
  },
  modules: {
  }
})
