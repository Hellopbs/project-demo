<template>
  <nav-bar>
    <template #center>
      <span >购物街</span>
    </template>
  </nav-bar>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultiData} from '@/network/home.js'
import {Swiper,SwiperItem} from '@/common/swiper/index'

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
    Swiper,
    SwiperItem
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