<template>
  <div class="wrapper">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <router-link :to="{path:'/detail/'+item.id}">
          <img :src="'https://images.weserv.nl?url=' + item.images.small" />
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p>豆瓣评分：{{ item.rating.average }}</p>
            <p>
              <span v-for="(item, i) in item.genres" :key="i" class="tag">{{
                item
              }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getListPageData'])
  },
  created () {
    // console.log(this)
    this.getListPageData('top250')
  },
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style lang="less" scoped>
</style>
