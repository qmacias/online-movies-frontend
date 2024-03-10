<template>
  <Header />
  <router-view />
</template>

<script>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  // watch: {
  //   $route(to) {
  //     this.updatePageTitle(to);
  //   },
  // },
  // methods: {
  //   updatePageTitle(route) {
  //     document.title = route.meta.title || "Default Page";
  //   },
  // },
  // created() {
  //   this.updatePageTitle(this.$route);
  // },
  setup() {
    // Using Composition API
    const route = useRoute();

    watchEffect(() => {
      document.title = route.meta.title || "Default Page";
    });
  },
};
</script>

<style></style>
