<script setup lang="ts">
import TimeLineItemComponent from '@/components/TimeLineItemComponent.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import XIcon from '@/components/icons/XIcon.vue'
import api from '@/services/api'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface User {
  id: string
  photo: string
  name: string
  role: string
  info: string
  facebook: string
  instagram: string
  linkedin: string
  likes: string[]
  dislikes: string[]
  relevant_dates: RelevantDates[]
}

interface RelevantDates {
  description: string
  date: string
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
      <a :href="user?.facebook" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex">
          <FacebookIcon class="w-6 rounded-md bg-white" /> <span class="ml-2">Facebook</span>
        </div>
      </a>
      <a :href="user?.instagram" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex">
          <InstagramIcon class="w-6 rounded-md bg-white" /> <span class="ml-2">Instagram</span>
        </div>
      </a>
      <a :href="user?.linkedin" class="text-orange-500 hover:text-orange-700 mx-3">
        <div class="flex">
          <LinkedinIcon class="w-6 rounded-md bg-white" /> <span class="ml-2">LinkedIn</span>
        </div>
      </a>
    </div>

    <hr class="border border-orange-600 mt-5" />

    <div class="flex flex-row">
      <div class="mt-5 w-1/2 flex flex-col items-center">
        <h3 class="text-xl font-semibold">Likes a lot</h3>
        <ul>
          <li class="text-gray-600 mt-2" v-for="(like, key) in user?.likes" :key="key">
            <div class="flex">
              <CheckIcon class="h-4 w-4 text-orange-500 dark:text-orange-400" />
              <span class="ml-2">{{ like }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-5 w-1/2 flex flex-col items-center">
        <h3 class="text-xl font-semibold">Dislike</h3>
        <ul>
          <li class="text-gray-600 mt-2" v-for="(dislike, key) in user?.dislikes" :key="key">
            <div class="flex">
              <XIcon class="h-4 w-4 text-orange-500 dark:text-orange-400" />
              <span class="ml-2">{{ dislike }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border border-orange-600 mt-5" />

    <div
      class="mt-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
    >
      <TimeLineItemComponent :dates="user?.relevant_dates" />
    </div>
  </div>
</template>

<style scoped></style>
