<template>
  <div>
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
  
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar.vue'

export default {
  name: 'App',
  components:{
    MainTabBar
}
}
</script>

<style>
  @import './assets/css/base.css';
  
</style>
