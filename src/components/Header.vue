<template>
  <header v-if="shouldShowHeader()">
    <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-2 mb-sm-2 mb-lg-0"
        >
          <NavigationBar />

          <form class="col-10 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from 'vue-router';

import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "Header",
  components: {
    NavigationBar
  },
  setup() {
    // Using Composition API
    const route = useRoute();

    const shouldShowHeader = () => {
      return !route.meta.hideHeader;
    };

    return { shouldShowHeader };
  }
};
</script>

<style scoped>
</style>
