<template>
  <div>
    <Header v-show="!$route.meta.isHidenHeader"></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidenFooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import 'swiper/css/swiper.css'
// ajax
export default {
  name: 'App',
  mounted() {
    //获取三级分类
    this.$store.dispatch('getBaseCategoryList')
    //获取路由
    this.$store.dispatch('getBannerList')
    //获取今日推荐
    this.$store.dispatch('getRecommend')
    //获取Floor
    this.$store.dispatch('getFloor')
  },
  components: {
    Footer,
    Header,
  },
}
</script>

<style></style>
