<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>

import { Swiper, SwiperItem } from '@/common/swiper/index'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>
<style>

</style>