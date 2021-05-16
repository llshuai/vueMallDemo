<template>
  <div>
    <tab-bar :tabBarItem="tabBarItem"></tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
  },
  data() {
    return {
      tabBarItem: [
        {
          path: "/home",
          url: "img/tabbar/home.svg",
          urlActive: "img/tabbar/home_a.svg",
          name: "首页",
        },
        {
          path: "/category",
          url: "img/tabbar/category.svg",
          urlActive: "img/tabbar/category_a.svg",
          name: "分类",
        },
        {
          path: "/shopcart",
          url: "img/tabbar/shopcart.svg",
          urlActive: "img/tabbar/shopcart_a.svg",
          name: "购物车",
        },
        {
          path: "/profile",
          url: "img/tabbar/profile.svg",
          urlActive: "img/tabbar/profile_a.svg",
          name: "我的",
        },
      ],
    };
  },
};
</script>

<style>
</style>
