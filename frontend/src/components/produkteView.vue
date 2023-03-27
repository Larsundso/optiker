<script setup lang="ts">
import Produkt from "./produkt.vue";

const produkte = (await fetch(
  `${window.location.protocol}//${window.location.host}/api/produkte`
).then((r) => r.json())) as {
  name: string;
  img: string;
}[];
</script>

<template>
  <div class="w-3/4 flex justify-center items-center gap-5 m-auto flex-wrap">
    <Produkt
      v-for="p in produkte"
      :key="p.name"
      :name="p.name"
      :img="p.img"
      class="hover:scale-110 transition-all ease-in-out duration-300"
    />
  </div>
</template>
