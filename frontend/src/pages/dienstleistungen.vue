<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-center my-8">
      Wir sind Ihr Partner für gutes Sehen
    </h1>
    <p class="text-lg text-center mb-8">
      Wir bieten Ihnen eine große Auswahl an modischen und hochwertigen Brillen
      zu fairen Preisen. Ob Sie eine Lesebrille, eine Sonnenbrille oder eine
      Gleitsichtbrille brauchen, wir haben für jeden Geschmack und jede
      Sehstärke das passende Modell. Und das Beste: Bei uns bekommen Sie Ihre
      Brille innerhalb von 24 Stunden geliefert!
    </p>
    <div class="grid grid-cols-2 gap-4">
      <div
        class="col-span-2 md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Online-Shop für Brillen
        </h2>
        <p class="text-gray-600 mb-4">
          Sie können Ihre Brille ganz einfach online bestellen. Wählen Sie aus
          unserem vielfältigen Sortiment die Brille aus, die Ihnen am besten
          gefällt. Geben Sie Ihre Sehstärke und Ihre Lieferadresse an. Wir
          kümmern uns um den Rest.
        </p>
        <RouterLink
          to="/produkte"
          class="inline-block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
          >Jetzt online bestellen</RouterLink
        >
      </div>
      <div
        class="col-span-2 md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Dienstleistungen rund um Ihre Augengesundheit
        </h2>
        <p class="text-gray-600 mb-4">
          Wir sind auch ein kompetenter und freundlicher Dienstleister rund um
          Ihre Augengesundheit. Wir bieten Ihnen folgende Dienstleistungen an:
        </p>
        <ul class="list-disc list-inside text-gray-600 mb-4">
          <li>Kostenlose Sehtests mit modernster Technik</li>
          <li>
            Professionelle Beratung zu den passenden Brillengläsern und
            Fassungen
          </li>
          <li>Anpassung und Reparatur Ihrer Brille</li>
          <li>Kontaktlinsen-Anpassung und -Pflege</li>
          <li>Vorsorgeuntersuchungen und Augenchecks</li>
        </ul>
        <RouterLink
          to="/kontakt"
          class="inline-block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
          >Jetzt online buchen</RouterLink
        >
      </div>
    </div>
  </div>
</template>
