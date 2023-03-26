<script setup lang="ts">
import FooterButton from "./footerButton.vue";
</script>
<template>
  <hr />
  <div
    class="w-full mt-auto bg-white/75 shadow-main z-[9999] flex justify-center items-center flex-col"
  >
    <div class="flex w-full justify-between items-center px-10 py-8">
      <div class="flex items-center">
        <div class="flex justify-center items-start flex-col pt-10">
          <div class="text-2xl font-bold pb-1">SchönesGlas</div>
          <h1 class="text-lg">SchoenesGlas.optik</h1>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <div class="flex flex-col items-center space-y-3">
          <FooterButton link="impressum" text="Impressum" />
          <FooterButton link="kontakt" text="Kontakt" />
        </div>
      </div>
    </div>

    <div class="mt-3 text-sm">
      © {{ new Date().getFullYear() }} SchönesGlas. Alle Rechte vorbehalten.
    </div>
  </div>
</template>
