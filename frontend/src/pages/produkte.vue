<script setup lang="ts">
import ProdukteView from "../components/produkteView.vue";
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <Suspense>
      <template #default>
        <ProdukteView />
      </template>

      <template #fallback>
        <div>
          Wir laden dir Produkte gerade <br />
          Bitte warten Sie einen Moment
        </div>
      </template>

      <template #error>
        <div>
          Wir konnten dir Produkte leider nicht anzeigen <br />
          Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut
        </div>
      </template>
    </Suspense>

    <div class="mt-20">
      Kontaktieren Sie uns gerne, für Angebote und weitere Informationen, über
      unser Kontatkformular
    </div>
  </div>
</template>
