<script setup lang="ts">
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheSubscribe from '@/components/TheSubscribe.vue'
import ThePagination from '@/components/ThePagination.vue'
import TheBanners from '@/components/TheBanners.vue'
import ThePosts from '@/components/ThePosts.vue'
import TheTopics from '@/components/TheTopics.vue'
</script>

<template>
  <TheHeader />
  <div>
    <BreadCrumbs />
    <TheBanners />
  </div>
  <main class="lg:flex">
    <div class="w-full lg:w-2/3">
      <ThePosts />
      <ThePagination />
    </div>
    <div class="w-full px-2 md:flex md:space-x-6 lg:block lg:w-1/3 lg:space-x-0">
      <TheTopics />
      <div class="w-full md:w-1/2 lg:w-full">
        <div class="border border-dotted md:hidden lg:block"></div>
        <TheSubscribe />
      </div>
    </div>
  </main>

  <TheFooter />
</template>

<style scoped></style>
