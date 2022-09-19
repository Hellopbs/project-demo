<template>
  <nav-bar>
    <template #center>
      <span >购物街</span>
    </template>
  </nav-bar>
  <BannerSwiper :banners='banners'/>
  <HomeRecommend :recommend='recommend' />
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultiData} from '@/network/home.js'
import BannerSwiper from '@/views/home/BannerSwiper.vue'
import HomeRecommend from './HomeRecommend.vue';

export default {
  name: 'HOME',
  data() {
    return {
      banners:null,
      recommend:null
    }
  },
  components: {
    NavBar,
    BannerSwiper,
    HomeRecommend
},
  props: {},
  computed: {},
  methods: {},
  created() {
    getHomeMultiData().then(res=>{
      
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list
      console.log(this.recommend);
      
    })
  },
  mounted() {}
};
</script>
<style>
</style>