<template>
  <router-link
    :to="to"
    class="inline-block border-b-2 border-transparent px-2 py-3 font-semibold text-gray-500 transition duration-300 hover:border-purple-800 hover:text-purple-800 dark:text-slate-200 dark:hover:border-purple-500 dark:hover:text-purple-500"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: String
})
</script>

<style lang="scss" scoped></style>
