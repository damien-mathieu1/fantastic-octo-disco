<script setup lang="ts">
  import MainPage from './views/MainPage.vue';
  import { onMounted } from "vue";

  onMounted(() => {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.setAttribute(
        "style",
        "top: " +
        (e.pageY - scrollY - 7) +
        "px; left: " +
        (e.pageX - scrollX - 5) +
        "px; transition: 0.1s ease-out;"
      );
    }
  });
});
</script>

<template>
  <MainPage />
</template>

<style lang="scss" scoped>
</style>
