<template>
  <!-- Don't change, please! -->
  <nav v-if="!$route.meta.hideNavbar">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
