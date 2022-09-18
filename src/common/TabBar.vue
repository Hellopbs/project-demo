<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
import TarBarItem from '@/components/content/TarBarItem.vue'
export default {
  components: {
    TarBarItem
},
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style>
  .tabbar {
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-shadow: 0 -3px 10px rgba(100, 100, 100, 0.5);
  }
  
</style>