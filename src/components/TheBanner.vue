<!-- src/components/Banner.vue -->
<template>
  <a href="#">
    <div
      class="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/10 to-black/70"
    ></div>
    <img :src="imageSrc" alt="news" class="absolute left-0 top-0 z-0 h-full w-full object-cover" />
    <div class="absolute bottom-0 left-0 z-20 p-4">
      <h2 class="text-4xl font-semibold leading-tight text-gray-100">{{ title }}</h2>
      <span
        class="mb-2 inline-flex items-center justify-center bg-gradient-to-bl from-blue-600 to-indigo-600 px-4 py-1 text-white"
        >{{ tag }}</span
      >
      <div class="mt-3 flex">
        <img :src="authorImage" alt="author" class="mr-2 h-10 w-10 rounded-full object-cover" />
        <div>
          <p class="text-sm font-semibold text-gray-200">{{ author }}</p>
          <time class="text-xs text-gray-400">{{ date }}</time>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  imageSrc: String,
  title: String,
  tag: String,
  author: String,
  authorImage: String,
  date: String
})
</script>

<style scoped></style>
