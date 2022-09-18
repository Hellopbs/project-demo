<template>
  <TabBar>
    <TarBarItem path="/home">
      <template #icon>
        <img src="@/assets/images/tabbar/home.svg" slot="icon">
      </template>
      <template #icon-active>
        <img src="@/assets/images/tabbar/home_active.svg" slot="icon">
      </template>
      <template #text>
        <div >首页</div>
      </template>  
    </TarBarItem>
    <TarBarItem path="/category">
      <template #icon>
        <img src="@/assets/images/tabbar/category.svg" slot="icon">
      </template>
      <template #icon-active>
        <img src="@/assets/images/tabbar/category_active.svg" slot="icon">
      </template>
      <template #text>
        <div >分类</div>
      </template>  
    </TarBarItem>
    <TarBarItem path="/shopcart">
      <template #icon>
        <img src="@/assets/images/tabbar/shopcart.svg" slot="icon">
      </template>
      <template #icon-active>
        <img src="@/assets/images/tabbar/shopcart_active.svg" slot="icon">
      </template>
      <template #text>
        <div >购物车</div>
      </template>  
    </TarBarItem>
    <TarBarItem path="/profile">
      <template #icon path="/home">
        <img src="@/assets/images/tabbar/profile.svg" slot="icon">
      </template>
      <template #icon-active>
        <img src="@/assets/images/tabbar/profile_active.svg" slot="icon">
      </template>
      <template #text>
        <div >我的</div>
      </template>  
    </TarBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/common/TabBar.vue'
import TarBarItem from '@/components/content/TarBarItem.vue'

export default {
  data() {
    return {
    };
  },
  components: {
    TabBar,
    TarBarItem
  },
};
</script>
<style>
</style>