<template>
  <Header />
  <router-view />
</template>

<script setup>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

import Header from "@/components/Header.vue";

// Using Composition API
const route = useRoute();

watchEffect(() => {
  document.title = route.meta.title || "Default Page";
});
</script>

<style></style>
