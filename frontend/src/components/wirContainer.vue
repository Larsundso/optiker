<script setup lang="ts">
const {
  title,
  section1Title,
  section1Content,
  section2Title,
  section2Content,
  section3Title,
  section3Content,
} = defineProps<{
  title: string;
  section1Title: string;
  section1Content: string;
  section2Title: string;
  section2Content: string;
  section3Title: string;
  section3Content: string;
}>();
</script>

<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-800 mb-4">{{ title }}</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            {{ section1Title }}
          </h3>
          <p class="text-gray-600">{{ section1Content }}</p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            {{ section2Title }}
          </h3>
          <p class="text-gray-600">{{ section2Content }}</p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            {{ section3Title }}
          </h3>
          <p class="text-gray-600">{{ section3Content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
