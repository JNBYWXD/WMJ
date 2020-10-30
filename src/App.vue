<template>
  <div id="app">
    <router-view class="content" />
    <van-tabbar v-model="active" :fixed="false" active-color="#ff461f">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="shop-o" :to="{ name: 'List' }"
        >热卖</van-tabbar-item
      >
      <van-tabbar-item icon="cart-o"  :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" :to="{ name: 'User' }"
        >用户</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// import axios from"axios";
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
