<!-- src/components/TheTopics.vue -->
<template>
  <div class="mb-5 w-full md:w-1/2 lg:w-full">
    <h5 class="mb-2 text-lg font-bold uppercase text-gray-700 dark:text-white">Popular News</h5>
    <ul>
      <TopicItem
        name="Vue"
        colorClass="bg-gradient-to-tr from-green-500 to-green-700"
        articleCount="23"
      />
      <TopicItem
        name="Svelte"
        colorClass="bg-gradient-to-tr from-orange-500 to-orange-700"
        articleCount="20"
      />
      <TopicItem
        name="Angular"
        colorClass="bg-gradient-to-tr from-red-500 to-red-700"
        articleCount="15"
      />
      <TopicItem
        name="React"
        colorClass="bg-gradient-to-tr from-blue-500 to-blue-700"
        articleCount="7"
      />
    </ul>
  </div>
</template>

<script setup>
import TopicItem from './TopicItem.vue'
</script>

<style lang="scss" scoped></style>
