<!-- src/components/TheBanners.vue -->
<template>
  <section class="px-2 lg:flex lg:space-x-2">
    <TheBanner
      class="relative mb-4 inline-block h-96 w-full overflow-hidden rounded bg-purple-300 bg-gradient-to-tr lg:w-2/3"
      imageSrc="/public/images/img-1.jpg"
      title="Lorem ipsum dolor sit amet consectetur."
      tag="React"
      author="John Doe"
      authorImage="https://randomuser.me/api/portraits/men/7.jpg"
      date="14 March"
    />
    <TheBanner
      class="relative mb-4 inline-block h-96 w-full overflow-hidden rounded bg-indigo-300 lg:w-1/3"
      imageSrc="/public/images/img-2.jpg"
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      tag="Angular"
      author="Jane Doe"
      authorImage="https://randomuser.me/api/portraits/women/7.jpg"
      date="15 March"
    />
  </section>
</template>

<script setup>
import TheBanner from '../TheBanner.vue'
</script>
116

<style lang="scss" scoped></style>
