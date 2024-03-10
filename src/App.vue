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
    Header
  },
  setup() {
    const route = useRoute();

    watchEffect(() => {
      document.title = route.meta.title || "Default Page";
    });
  }
};
</script>

<style>
</style>
