<script setup lang="ts">
export interface Props {
  dates: RelevantDate[]
}

interface RelevantDate {
  description: string
  date: string
}

const props = withDefaults(defineProps<Props>(), {
  dates() {
    return [
      {
        description: '',
        date: ''
      }
    ]
  }
})
</script>

<template>
  <div
    v-for="date in props.dates"
    class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
  >
    <div
      class="flex justify-center items-center w-24 h-24 text-white font-medium bg-orange-500 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
    >
      {{ date.date }}
    </div>

    <div
      class="text-center w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-orange-200 shadow"
    >
      {{ date.description }}
    </div>
  </div>
</template>

<style scoped></style>
