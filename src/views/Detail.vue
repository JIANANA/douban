<template>
  <div class="wrapper">
    <div class="item" v-if="item">
      <img :src="'https://images.weserv.nl?url=' + item.images.large" alt="" />
      <div>
        <p>豆瓣评分：{{ item.rating.average }}</p>
        <p>产地：{{ item.countries[0] }}</p>
        <p>
          <span v-for="(item, i) in item.genres" :key="i" class="tag">{{
            item
          }}</span>
        </p>
        <p>{{ item.summary }}</p>
      </div>
    </div>
    <div v-else>正在加载中...</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['item'])
  },
  methods: {
    ...mapActions(['getDetailPageData'])
  },
  created () {
    this.getDetailPageData(this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
</style>
