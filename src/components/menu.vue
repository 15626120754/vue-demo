<template>
  <div class="myMenu">
    <el-row class="tac">
      <el-col>
        <h5>后台管理系统</h5>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#20222A"
          active-text-color="#FB901C"
          text-color="#fff"
          >
          <el-submenu :index="item.id" v-for="(item, t) in menus" :key="t">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="k.url" v-for="(k, i) in item.category" :key="i" @click="selectPages(k.categoryName, k.url)">{{k.categoryName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { MENUS } from '@/data/menusData.js'
export default {
  name: 'myMenu',
  data() {
    return {
      menus: MENUS.admin,
      tabs: this.$store.state.options
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    selectPages(categoryName, url) {
      // this.$router.push(url)
      let ObjData = {'name': categoryName, 'path': url};
      this.$store.commit('setCategoryName', ObjData);
      this.$store.commit('setUrlRoute', url);
    }
  }
}
</script>

<style scoped lang="scss">
  .myMenu {
    width: 240px;
    height: 100%;
    background: #20222A;
    padding-top: 49px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    overflow: auto;
    h5 {
      width: 240px;
      height: 49px;
      line-height: 49px;
      text-align: center;
      background: #FB901C;
      color: #fff;
      margin: 0;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 16px;
      position: fixed;
      top: 0;
      z-index: 10;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    }
    .el-menu {
      border-right: 0;
    }
  }
</style>
