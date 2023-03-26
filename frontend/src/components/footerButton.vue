<script setup lang="ts">
const props = defineProps<{ link: string; text: string; absolute?: boolean }>();
</script>

<template>
  <RouterLink
    :to="`/${props.link}`"
    class="w-full text- text-black text-lg mx-5 px-2 hover:bg-neutral-200 transition-all ease-in-out delay-75"
    v-if="!props.absolute"
    >{{ props.text }}</RouterLink
  >
  <a
    v-else
    :href="props.link"
    class="w-full text-left text-lg mx-5 px-2 hover:bg-neutral-600 transition-all ease-in-out delay-75"
    target="_blank"
  >
    {{ props.text }}
  </a>
</template>
