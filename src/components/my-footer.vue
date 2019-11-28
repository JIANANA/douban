<template>
  <div class="my-footer">
    <ul>
      <li>
        <router-link to="/hot">
          <span class="iconfont icon-remen"></span>
          <p>正在热映</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movie">
          <span class="iconfont icon-dianying"></span>
          <p>即将上映</p>
        </router-link>
      </li>
      <li>
        <router-link to="/top">
          <span class="iconfont icon-top"></span>
          <p>top250</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
