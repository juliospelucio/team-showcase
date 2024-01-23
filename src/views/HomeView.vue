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
  <div class="bg-gray-100 min-h-screen flex flex-wrap gap-1 items-center justify-around px-5">
    <CardComponent
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :photo="user.photo"
      :name="user.name"
      :role="user.role"
      :info="user.info"
    />
  </div>
</template>

<style scoped></style>
