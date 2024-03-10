<template>
  <Header :showComponent="showComponent" />
  <router-view />
  <Footer :showComponent="showComponent" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
const showComponent = ref(true);

watchEffect(() => {
  showComponent.value = !route.meta.hideComponents;
  document.title = route.meta.title || "Default Page";
});
</script>

<style></style>
