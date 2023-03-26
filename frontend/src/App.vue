<script lang="ts" setup>
import Footer from "./components/footer.vue";
import NavBar from "./components/navbar.vue";
</script>

<template>
  <NavBar />
  <div class="min-h-[100vh] mt-20">
    <router-view />
  </div>
  <Footer />
</template>
