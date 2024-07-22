<template>
  <router-link
    :to="to"
    class="dark:text-slate-200 dark:hover:text-purple-500 dark:hover:border-purple-500 transition duration-300 inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800 text-gray-500 font-semibold"
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
