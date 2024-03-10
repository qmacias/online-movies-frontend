<template>
  <footer v-if="showComponent">
    <p>&copy; 2024 All rights reserved</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {
    showComponent: Boolean,
  },
};
</script>

<style scoped>
footer {
  padding: 0 0 2.5rem 0;
  text-align: center;
}
footer p:last-child {
  margin-bottom: 0;
}
</style>
