<template>
  <li>
    <router-link
      class="ark:text-slate-400 inline-block border border-gray-300 px-3 py-1 text-gray-500 transition duration-300 hover:bg-gray-100 hover:text-gray-700"
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
