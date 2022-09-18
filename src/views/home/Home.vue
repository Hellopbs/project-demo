<template>
  <nav-bar>
    <template #center>
      <span >购物街</span>
    </template>
  </nav-bar>
  <BannerSwiper :banners='banners'/>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultiData} from '@/network/home.js'
import BannerSwiper from '@/views/home/BannerSwiper.vue'

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
    BannerSwiper
},
  props: {},
  computed: {},
  methods: {},
  created() {
    getHomeMultiData().then(res=>{
      
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list
    })
  },
  mounted() {}
};
</script>
<style>
</style>