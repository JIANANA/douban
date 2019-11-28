<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>
<script>
// 引入头部和底部组件
import MyFooter from './components/my-footer'
import MyHeader from './components/my-header'
export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>
<style lang="less">
#app{
  height: 100%;
  width: 100%
}
</style>
