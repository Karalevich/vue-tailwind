<template>
  <div class="flex items-center px-2">
    <div class="flex items-center overflow-y-auto whitespace-nowrap py-4">
      <BreadCrumbItem to="/" label="Home">
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </BreadCrumbItem>
      <BredCrumbSeparator />
      <BreadCrumbItem to="/news" label="News" />
      <BredCrumbSeparator />
      <BreadCrumbItem to="/tech" label="Tech" />
    </div>
  </div>
</template>

<script setup>
import BredCrumbSeparator from '@/components/BredCrumbSeparator.vue'
import BreadCrumbItem from '@/components/BreadCrumbItem.vue'
</script>
