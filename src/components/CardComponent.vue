<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  id: string
  photo: string
  name: string
  role: string
  info: string
}

const props = defineProps<Props>()

const imagePath = computed(() => new URL('/src/assets/images/' + props.photo, import.meta.url).href)
</script>

<template>
  <div class="w-64 h-96 bg-white shadow-lg rounded-md overflow-hidden border border-orange-600">
    <div class="w-full bg-orange-500">
      <img class="w-full h-52 object-cover px-[0.10rem]" :src="imagePath" alt="Profile Picture" />
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ props.name }}</h2>
      <p class="text-gray-600">{{ props.role }}</p>
      <p class="text-gray-700 mt-2 truncate cursor-help" :title="props.info">{{ props.info }}</p>
      <div class="flex justify-between items-center mt-4">
        <RouterLink :to="{ name: 'profile', params: { id: props.id } }">
          <a href="#" class="text-blue-500 hover:underline">View Profile</a>
        </RouterLink>
        <div class="flex items-center">
          <img
            class="w-8 h-8 rounded-full mr-2 border border-orange-600"
            src="@/assets/images/team-logo.png"
            alt="Avatar"
          />
          <span class="text-gray-700">Fox</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
