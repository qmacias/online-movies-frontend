<template>
  <header v-if="showComponent">
    <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-2 mb-sm-2 mb-lg-0"
        >
          <NavigationBar />

          <form class="col-10 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              id="search"
              name="search"
              type="search"
              class="form-control"
              placeholder="Search..."
            />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              Log in
            </button>
            <button type="button" class="btn btn-warning">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "Header",
  components: {
    NavigationBar,
  },
  props: {
    showComponent: Boolean,
  },
};
</script>

<style scoped></style>
