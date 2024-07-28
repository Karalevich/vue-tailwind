<!-- src/components/TopicItem.vue -->
<template>
  <li
    class="border-y border-white px-1 py-4 transition-all duration-300 hover:border-gray-200 dark:border-transparent dark:hover:border-gray-200"
  >
    <a class="flex items-center text-gray-600 dark:text-slate-400" href="#">
      <span :class="colorClass" class="mr-3 inline-block h-4 w-4"></span>
      {{ name }}
      <span class="ml-auto text-gray-500 dark:text-slate-400">{{ articleCount }} articles</span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  name: String,
  colorClass: String,
  articleCount: Number
})
</script>

<style scoped></style>
