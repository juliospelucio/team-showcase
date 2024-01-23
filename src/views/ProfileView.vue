<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import api from '@/services/api'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface User {
  id: string
  photo: string
  name: string
  role: string
  info: string
}

const user = ref<User>()
const imagePath = computed(
  () => new URL('/src/assets/images/' + user.value?.photo, import.meta.url).href
)

onMounted(async () => {
  try {
    const route = useRoute()

    const res = await api.get(`/users/${route.params.id}`)
    user.value = res.data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <img class="w-32 h-32 rounded-full mx-auto" :src="imagePath" alt="Profile picture" />
    <h2 class="text-center text-2xl font-semibold mt-3">{{ user?.name }}</h2>
    <p class="text-center text-gray-600 mt-1">{{ user?.role }}</p>
    <div class="flex justify-center mt-5">
      <!-- TODO social media links -->

      <a href="#" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex"><FacebookIcon /> <span class="ml-2">Facebook</span></div>
      </a>
      <a href="#" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex"><InstagramIcon /> <span class="ml-2">Instagram</span></div>
      </a>
      <a href="#" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex"><LinkedinIcon /> <span class="ml-2">LinkedIn</span></div>
      </a>
      <!-- <a href="#" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex">
          <GithubIcon /> <span class="ml-2">GitHub</span>
        </div>
      </a> -->
    </div>
    <!-- TODO Add start date and end date -->
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Likes a lot</h3>
      <p class="text-gray-600 mt-2">teste</p>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Dislike</h3>
      <p class="text-gray-600 mt-2">teste</p>
    </div>
  </div>
</template>

<style scoped></style>