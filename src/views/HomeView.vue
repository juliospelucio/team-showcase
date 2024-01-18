<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import api from '@/services/api'
import { ref, onMounted } from 'vue'

interface User {
  id: string
  photo: string
  name: string
  role: string
  info: string
}

const users = ref<User[]>([])

onMounted(async () => {
  try {
    const res = await api.get(`/users`)
    users.value = res.data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="flex w-full justify-center items-center h-20 bg-orange-500 shadow-custom mb-10">
    <div class="flex flex-1 items-center justify-center px-8 text-gray-100 gap-x-4">
      My Dream Team
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen flex flex-wrap gap-1 items-center justify-around px-5">
    <CardComponent
      v-for="user in users"
      :key="user.id"
      :photo="user.photo"
      :name="user.name"
      :role="user.role"
      :info="user.info"
    />
  </div>
</template>

<style scoped></style>
