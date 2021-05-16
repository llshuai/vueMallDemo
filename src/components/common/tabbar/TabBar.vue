<template>
  <div id="tab-bar">
    <TabBarItem
      :tabBarItem="tabBarItem"
      v-for="item of tabBarItem"
      :key="item.name"
      :path="item.path"
      :url="item.url"
      :urlActive="item.urlActive"
      :name="item.name"
    ></TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  props: {
    tabBarItem: {
      type: Array,
      required: true,
      default: { name: "", path: "", url: "", urlActive: "" },
    },
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
#tab-bar {
  display: flex;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);

  height: 44px;
  font-size: 10px;
}
</style>