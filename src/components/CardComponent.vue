<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  photo: string
  name: string
  role: string
  info: string
}

const props = defineProps<Props>()

const imagePath = computed(() => new URL('/src/assets/images/' + props.photo, import.meta.url).href)
</script>

<template>
  <div
    class="max-w-72 min-w-72 bg-white shadow-lg rounded-md overflow-hidden border border-orange-600"
  >
    <div class="w-full bg-orange-500">
      <img class="w-full h-52 object-cover px-[0.10rem]" :src="imagePath" alt="Profile Picture" />
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ props.name }}</h2>
      <p class="text-gray-600">{{ props.role }}</p>
      <p class="text-gray-700 mt-2">{{ props.info }}</p>
      <div class="flex justify-end items-center mt-4">
        <a href="#" class="text-orange-500 hover:underline">Go to Profile</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
