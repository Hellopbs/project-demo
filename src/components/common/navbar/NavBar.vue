<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
  .nav-bar {
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    background-color: var(--color-tint);
    box-shadow: 0 3px 10px rgba(100, 100, 100, 0.5);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex:1;
    color:white;
    
  }
</style>
