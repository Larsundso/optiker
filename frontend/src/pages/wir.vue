<script setup lang="ts">
import WirContainer from "../components/wirContainer.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 smpx-6 lgpx-8">
    <div class="py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Über Uns</h1>
      <div class="mb-8">
        <p class="text-gray-600">
          SchönesGlas wurde von Optikermeister Tom Paulus gegründet und ist eine
          Optikerkette mit Filialen in verschiedenen Städten. Wir sind stolz
          darauf, hochwertige Brillen und Gläser zu erschwinglichen Preisen
          anzubieten und unseren Kunden einen exzellenten Kundenservice zu
          bieten. Wir glauben daran, dass jeder eine Brille tragen sollte, die
          nicht nur funktional, sondern auch stilvoll ist.
        </p>
      </div>
      <WirContainer
        title="Unsere Werte"
        section1Title="Qualität"
        section1Content="Wir legen großen Wert auf die Qualität unserer Brillen und Gläser und arbeiten nur mit den besten Herstellern zusammen, um sicherzustellen, dass unsere Kunden das beste Produkt erhalten."
        section2Title="Kundenservice"
        section2Content="Wir setzen uns dafür ein, dass unsere Kunden die bestmögliche Erfahrung machen. Unser Kundenservice-Team steht immer bereit, um Fragen zu beantworten und Probleme zu lösen."
        section3Title="Nachhaltigkeit"
        section3Content="Wir glauben an die Verantwortung, die wir als Unternehmen haben, und bemühen uns, nachhaltige Praktiken in unserem Geschäft umzusetzen. Wir arbeiten mit umweltfreundlichen Materialien und bemühen uns, Abfall zu minimieren."
      />
      <WirContainer
        title="Unser Team"
        section1Title="Tom Paulus"
        section1Content="Gründer & Optikermeister"
        section2Title="Anna Müller"
        section2Content="Augenoptikerin"
        section3Title="Max Mustermann"
        section3Content="Kundenberater"
        class="mt-10"
      />
      <WirContainer
        title="Unsere Standorte"
        section1Title="Berlin"
        section1Content="Adresse Musterstraße 1, 10115 Berlin"
        section2Title="Hamburg"
        section2Content="Adresse Musterstraße 2, 20095 Hamburg"
        section3Title="München"
        section3Content="Adresse Musterstraße 3, 80331 München"
        class="mt-10"
      />
    </div>
  </div>
</template>
