<template>
  <div class="tabbar-item" @click="handleClick">
    <slot name="icon" v-if="isActive"></slot>
    <slot name="icon-active" v-else></slot>
    <div :class="{active:!isActive}">
      <slot name="text" ></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
    path:String
  },
  methods: {
    handleClick(){
      this.$router.push(this.path);
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)===-1;
    }
  }

};
</script>
<style>
  .tabbar-item {
    flex:1;
    text-align:center;
    height: 49px;
  }
  .tabbar-item img {
    height: 24px;
    width: 24px;
    vertical-align:middle;
    margin-top: 4px;

  }
  .active {
    color:red
  }
</style>