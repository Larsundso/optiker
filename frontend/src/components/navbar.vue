<script setup lang="ts">
import NavBarButton from "./navbarButton.vue";
import Cookies from "js-cookie";
import { ref } from "vue";

const token = ref(Cookies.get("token"));
</script>

<template>
  <div
    class="flex justify-between items-center fixed top-0 right-0 left-0 bg-neutral-800/75 z-50"
  >
    <RouterLink to="/">
      <div class="flex justify-center items-center">
        <img
          class="w-10 h-10 ml-1"
          src="https://cdn-icons-png.flaticon.com/512/1030/1030626.png"
        />
        <h1 class="text-lg ml-2 font-bold text-white">SchönesGlas</h1>
      </div>
    </RouterLink>
    <div class="flex justify-center items-center">
      <NavBarButton link="" text="Start" />
      <NavBarButton link="produkte" text="Produkte" class="text-yellow-500" />
      <NavBarButton link="dienstleistungen" text="Dienstleistungen" />
      <NavBarButton link="wir" text="Über Uns" />
      <NavBarButton v-if="!token" link="login" text="Admin Login" />
      <NavBarButton v-else link="dashboard" text="Dashboard" />
    </div>
  </div>
</template>
