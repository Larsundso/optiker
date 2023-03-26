<script setup lang="ts">
import Cookies from "js-cookie";
import { ref } from "vue";
import ProduktView from "../components/admin/produktView.vue";

const token = ref(Cookies.get("token"));
if (!token.value) {
  window.location.href = `${window.location.href.replace(
    "dashboard",
    "login"
  )}`;
}

const logout = () => {
  Cookies.remove("token");
  window.location.reload();
};
</script>

<template>
  <button class="absolute right-10 top-10" @click="() => logout()">
    Log-Out
  </button>
  <Suspense>
    <template #default>
      <ProduktView />
    </template>
    <template #fallback> Die Produkte werden geladen... </template>
    <template #error> Fehler beim Laden der Produkte </template>
  </Suspense>
</template>
