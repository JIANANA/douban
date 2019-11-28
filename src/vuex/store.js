// 导出store实例
import Vuex from 'vuex'
import Vue from 'vue'
import jsonp from 'jsonp'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 申明数据
  state: {
    // 标题
    title: '',
    // 列表
    list: [],
    // 详情
    item: null
  },
  // 修改数据
  mutations: {
    // 修改列表页面的数据 约定：data = {title,list}
    setListPageData (state, data) {
      state.title = data.title
      state.list = data.list
    },
    // 修改详情页面的数据 约定：data = {title,item}
    setDetailPageData (state, data) {
      state.title = data.title
      state.item = data.item
    }
  },
  // 获取数据
  actions: {
    // 获取列表页面的数据
    getListPageData (context, type) {
      // 发请求获取数据  jsonp请求
      jsonp('http://api.douban.com/v2/movie/' + type + '?apikey=0df993c66c0c636e29ecbb5344252a4a', (err, data) => {
        if (err) return alert('请求失败')
        // 请求成功  使用data数据
        // 调用mutations函数setListPageData修改数据
        context.commit('setListPageData', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    getDetailPageData (context, id) {
      // 发请求
      jsonp('http://api.douban.com/v2/movie/subject/' + id + '?apikey=0df993c66c0c636e29ecbb5344252a4a', (err, data) => {
        if (err) return alert('请求失败')
        // 请求成功  使用data数据  就是电影详情 {title,images,genres,...}
        context.commit('setDetailPageData', {
          title: data.title,
          item: data
        })
      })
    }
  }
})

export default store
