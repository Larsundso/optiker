<script setup lang="ts">
const props = defineProps<{ link: string; text: string }>();
</script>

<template>
  <RouterLink
    :to="`/${props.link}`"
    class="text-lg mx-5 px-2 rounded-xl hover:bg-neutral-200 transition-all ease-in-out delay-75"
    >{{ props.text }}</RouterLink
  >
</template>
