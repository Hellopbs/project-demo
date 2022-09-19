<template>
  <div class="home-recommend">
    <div v-for="(item, index) in recommend " :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" />
          <div class="recommend-title">{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>
<style>
  .home-recommend{
    display: flex;
    text-align: center;
    padding: 5px 0px 25px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex:1;
    height: 70px;
  }
  .recommend-item img{
    height: 100%;
  }

</style>