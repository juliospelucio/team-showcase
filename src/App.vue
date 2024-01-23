<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex w-full justify-center items-center h-20 bg-orange-500 shadow-custom mb-10">
    <RouterLink
      :to="{ name: 'home' }"
      class="flex flex-1 items-center justify-center px-8 text-gray-100 gap-x-4"
    >
      <img
        class="w-20 h-20 rounded-full"
        src="@/assets/images/team-logo.png"
        alt="Profile picture"
      />
      <span class="text-lg">My Dream Team - Fox</span>
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>
