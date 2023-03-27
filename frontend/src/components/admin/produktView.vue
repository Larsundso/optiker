<script setup lang="ts">
import Produkt from "./produkt.vue";
import Cookies from "js-cookie";
import { ref } from "vue";

const apiProdukte = (await fetch(
  `${window.location.protocol}//${window.location.host}/api/produkte`
).then((res) => res.json())) as {
  name: string;
  id?: number;
  img: string;
}[];

const produkte = ref([...apiProdukte]);
const hasUnsavedChanges = ref(false);

const createNew = () => {
  produkte.value.push({
    name: "",
    id: produkte.value.length + 1,
    img: "",
  });

  hasUnsavedChanges.value = true;
};

const deleteProdukt = (delP: { name: string; id?: number; img: string }) => {
  produkte.value = produkte.value.filter((p) => p.id !== delP.id);

  if (!apiProdukte.find((p) => p.name === delP.name && p.img === delP.img)) {
    return;
  }

  console.log("Sending delete request to localhost/api/produkt", delP.id);

  fetch(`${window.location.protocol}//${window.location.host}/api/produkt`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: JSON.stringify({ id: delP.id }),
  });
};

const updateProdukt = (updatedP: {
  name: string;
  id?: number;
  img: string;
}) => {
  console.log(updatedP.id);

  const value = produkte.value.find((p) => p.id === updatedP.id);
  if (!value) return;

  value.name = updatedP.name;
  value.img = updatedP.img;

  hasUnsavedChanges.value = true;
};

const save = () => {
  fetch(`${window.location.protocol}//${window.location.host}/api/produkte`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: JSON.stringify(produkte.value.map((p) => ({ ...p, id: undefined }))),
  });

  window.location.reload();
};
</script>

<template>
  <div class="border-neutral-500 flex flex-col my-10 w-3/4 m-auto">
    <div class="flex flex-row m-auto justify-between w-96">
      <div>Name</div>
      <div>Bild</div>
      <div></div>
    </div>
    <Produkt
      v-for="(p, i) in produkte"
      :produkt="p"
      :key="p.id"
      @delete="(p) => deleteProdukt(p)"
      @update="(p) => updateProdukt(p)"
    />
    <button class="mt-10 bg-green-500 w-40 m-auto" @click="() => createNew()">
      Produkt hinzufügen
    </button>
    <button
      v-if="hasUnsavedChanges"
      class="mt-10 bg-yellow-500 w-40 m-auto"
      @click="() => save()"
    >
      Speichern
    </button>
  </div>
</template>
