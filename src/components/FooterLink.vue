<template>
  <li>
    <router-link
      class="inline-block py-2 text-gray-500 decoration-gray-700 underline-offset-2 transition duration-300 hover:underline dark:text-slate-400"
      :to="to"
    >
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  to: String
})
</script>
