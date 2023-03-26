<script setup lang="ts">
const props = defineProps<{ name: string; img: string }>();
</script>

<template>
  <div class="bg-neutral-200 w-1/4 h-1/4">
    <img :src="props.img" class="w-80 h-auto" />
    <div class="p-5">
      <h1 class="text-2xl font-bold">{{ props.name }}</h1>
    </div>
  </div>
</template>
