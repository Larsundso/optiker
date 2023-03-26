<script setup lang="ts">
import { ref } from "vue";

defineEmits<{
  (e: "delete", value: typeof props.produkt): void;
  (e: "update", value: typeof props.produkt): void;
}>();

const props = defineProps<{
  produkt: { name: string; id?: number; img: string };
}>();

const name = ref(props.produkt.name);
const img = ref(props.produkt.img);

const classes = "bg-white border-2 border-black rounded-xl p-2 m-2";
</script>

<template>
  <div class="m-auto flex justify-center items-center">
    <input
      type="text"
      v-model="name"
      placeholder="Name"
      id="name"
      :class="classes"
      @change="
        () => $emit('update', { name: name, img: img, id: props.produkt.id })
      "
    />
    <input
      type="text"
      v-model="img"
      placeholder="Bild"
      id="img"
      :class="classes"
      @change="
        () => $emit('update', { name: name, img: img, id: props.produkt.id })
      "
    />
    <button
      class="bg-red-500 w-40"
      @click="() => $emit('delete', props.produkt)"
    >
      Produkt entfernen
    </button>
  </div>
</template>
