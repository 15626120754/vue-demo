<template>
  <div id="app">
    <myMenu></myMenu>
    <div class="pages-menu">
      <navMenu :menuVal="menuVal"></navMenu>
      <router-view class="p20" />  
    </div>
  </div>
</template>

<script>
import myMenu from '@/components/menu.vue';
import navMenu from '@/components/navMenu.vue';
export default {
  components: {
    myMenu,
    navMenu
  },
  data() {
    return {
      menuVal: ''
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import '@/assets/css/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pages-menu {
  padding-left: 240px;
  box-sizing: border-box;
}
</style>
