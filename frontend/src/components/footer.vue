<script setup lang="ts">
import FooterButton from "./footerButton.vue";
</script>

<template>
  <hr class="border-gray-300 my-8" />
  <div
    class="bg-white/75 shadow-main z-[9999] flex flex-col sm:flex-row justify-center items-center px-6 py-8"
  >
    <div class="flex items-center mb-6 sm:mb-0 sm:mr-8">
      <div class="flex justify-center items-start flex-col">
        <div class="text-2xl font-bold pb-1">SchönesGlas</div>
        <h1 class="text-lg">SchoenesGlas.optik</h1>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6"
    >
      <FooterButton link="impressum" text="Impressum" />
      <FooterButton link="kontakt" text="Kontakt" />
    </div>
    <div class="mt-3 text-sm sm:ml-auto">
      © {{ new Date().getFullYear() }} SchönesGlas. Alle Rechte vorbehalten.
    </div>
  </div>
</template>
