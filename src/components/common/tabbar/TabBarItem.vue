<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive">
      <img :src="require('@/assets/' + url)" />
    </div>
    <div v-else>
      <img :src="require('@/assets/' + urlActive)" alt />
    </div>
    <div :style="activeColor">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: "",
    url: "",
    urlActive: "",
    path: "",
    color: {
      type: String,
      default: "red",
    },
  },
  methods: {
    ItemClick() {
      if (this.$route.path !== this.path) this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColor() {
      return { color: this.isActive ? this.color : "black" };
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;

  margin: 2px 2px;
}
</style>