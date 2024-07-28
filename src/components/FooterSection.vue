<template>
  <div>
    <h6 class="mb-3 font-semibold text-gray-700 dark:text-white">
      {{ title }}
    </h6>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>
