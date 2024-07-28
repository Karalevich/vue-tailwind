<template>
  <router-link
    :to="to"
    class="text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-slate-400"
  >
    <slot>{{ label }}</slot>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
